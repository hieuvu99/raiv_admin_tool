/**
 * @type {import('@types/aws-lambda').DefineAuthChallengeTriggerHandler}
 */
exports.handler = async function (event) {
  if (
    event.request.session.length == 1 &&
    event.request.session[0].challengeName == "SRP_A"
  ) {
    event.response.issueTokens = false;
    event.response.failAuthentication = false;
    event.response.challengeName = "CUSTOM_CHALLENGE";
  } else if (
    event.request.session &&
    event.request.session.length &&
    event.request.session.slice(-1)[0].challengeName === 'CUSTOM_CHALLENGE' &&
    event.request.session.slice(-1)[0].challengeResult === true
  ) {
    // The user provided the correct signature; succeed auth
    event.response.issueTokens = true;
    event.response.failAuthentication = false;
  } else {
    // The user did not provide a correct signature; present challenge
    event.response.issueTokens = false;
    event.response.failAuthentication = false;
    event.response.challengeName = "CUSTOM_CHALLENGE";
  }

  return event;
}
