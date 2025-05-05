/**
 * @type {import('@types/aws-lambda').CreateAuthChallengeTriggerHandler}
 */
const { SESClient,SendEmailCommand } = require("@aws-sdk/client-ses");
const { randomDigits } = require("crypto-secure-random-digit");


const REGION = "us-west-2";
const ses = new SESClient({ region: REGION });



async function sendChallengeCode(emailAddress, secretCode) {


    const params = {
        Destination: { ToAddresses: [emailAddress] },
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: `<html><body><p>This is your RAIV Uploader secret login code:</p>
                           <h3>${secretCode}</h3></body></html>`
                },
                Text: {
                    Charset: 'UTF-8',
                    Data: `Your RAIV Uploader secret login code: ${secretCode}`
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'RAIV login code'
            }
        },
        Source: 'cloud@firstlanguages.ai'
    };


    const command = new SendEmailCommand(params);

    try {
        const response = await ses.send(command);
        console.log(`Email sent successfully: ${response.MessageId}`);
    } catch (error) {
        console.error(`Failed to send email: ${error.message}`);
    }

}

exports.handler = async function (event) {

    if (event.request.challengeName === 'CUSTOM_CHALLENGE') {

        let secretLoginCode;
        if (!event.request.session || !event.request.session.length) {

            // This is a new auth session
            // Generate a new secret login code and mail it to the user
            secretLoginCode = randomDigits(6).join('');
            await sendChallengeCode(event.request.userAttributes.email, secretLoginCode);

        } else {

            // There's an existing session. Don't generate new digits but
            // re-use the code from the current session. This allows the user to
            // make a mistake when keying in the code and to then retry, rather
            // than needing to e-mail the user an all new code again.
            const previousChallenge = event.request.session.slice(-1)[0];
            secretLoginCode = previousChallenge.challengeMetadata.match(/CODE-(\d*)/)[1];
        }

        // Add the secret login code to the private challenge parameters
        event.response.privateChallengeParameters = { answer: secretLoginCode };

        // Add public challenge parameters, this is sent back to the client app
        event.response.publicChallengeParameters = {
            fieldTitle: 'Enter the secret',
            fieldHint: 'Check your email'
        };

        // Add the secret login code to the session so it is available
        // in a next invocation of the "Create Auth Challenge" trigger
        event.response.challengeMetadata = `CODE-${secretLoginCode}`;

        return event;
    }

};
