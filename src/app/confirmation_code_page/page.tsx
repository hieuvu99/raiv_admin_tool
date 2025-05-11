"use client";
import { useAuth } from "@/context/AuthContext";
import AuthService from "@/service/AuthServices";
import { signOut } from "@aws-amplify/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  View,
  Flex,
  Heading,
  Text,
  Button,
  Loader,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./style.css";

const isNumericDigit = (value: string): boolean => /^\d$/.test(value);

const ConfirmationCodePage: React.FC = () => {
  const { user, setUser } = useAuth();
  const INITIAL_CODE_STATE = Array(6).fill("");
  const [code, setCode] = useState<string[]>(INITIAL_CODE_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);

  const router = useRouter();

  const handleVerify = async () => {
    if (!user) {
      setFeedback("User session is missing. Please go back and try again.");
      return;
    }

    if (code.some((digit) => digit === "")) {
      setFeedback("Please enter a valid 6-digit code.");
      return;
    }

    setIsLoading(true);
    setFeedback(null);

    try {
      if (code.some((digit) => !isNumericDigit(digit))) {
        setFeedback("Please enter a valid 6-digit numeric code.");
        setIsLoading(false);
        return;
      }
      const result = await AuthService.confirmVerificationCode(code.join(""));
      if (result.isSignedIn && result.nextStep?.signInStep === "DONE") {
        const { userId, email, token } = result;
        setUser({ userId, email, token });
        router.push("/home");
      } else {
        setIsLoading(false);
        setFeedback("Failed to verify code. Please try again.");
      }
    } catch (error) {
      setIsLoading(false);
      if (error instanceof TypeError) {
        setFeedback(
          "Network error. Please check your internet connection and try again."
        );
      } else if (error instanceof Error && error.message.includes("500")) {
        setFeedback("Server error. Please try again later.");
      } else {
        setFeedback(
          error instanceof Error
            ? error.message
            : "Failed to verify code. Please try again."
        );
      }
    }
  };

  return (
    <View
      className="confirmation-code-page"
      height="100vh"
      display="flex"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Flex
        className="confirmation-code-container"
        direction="column"
        alignItems="center"
        padding="2rem"
        backgroundColor="white"
        borderRadius="8px"
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
        width="400px"
      >
        {isLoading ? (
          <Loader size="large" />
        ) : (
          <>
            <Heading level={3} className="font-black" marginBottom="1rem">
              Sign In
            </Heading>
            <Text
              className="font-light"
              marginBottom="1.5rem"
              textAlign="center"
            >
              A verification code has been sent to your email address. Please
              check your inbox and spam folder for the code.
            </Text>
            <div
              className="verification-input-container"
              style={{ display: "flex", gap: "10px", justifyContent: "center" }}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <React.Fragment key={index}>
                  <input
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    value={code[index] || ""}
                    onChange={onCodeDigitChange(index)}
                    onKeyDown={handleBackspaceFocus(
                      code.join(""),
                      index,
                      inputRefs
                    )}
                    className="verification-input-box"
                  />
                </React.Fragment>
              ))}
            </div>
            <Button
              className="confirmation-code-button"
              onClick={handleVerify}
              isLoading={isLoading}
              loadingText="Verifying..."
              variation="primary"
              size="large"
              isDisabled={isLoading}
              width="100%"
              marginTop="1rem"
            >
              Verify Code
            </Button>
            <Button
              onClick={() => {
                signOut();
                setUser(null);
                window.history.back();
              }}
              className="cancel-button"
              variation="link"
              size="large"
              isDisabled={isLoading}
              width="70%"
              marginTop="1rem"
              colorTheme="overlay"
            >
              Cancel Sign-In
            </Button>
            {feedback && (
              <Text
                marginTop="1rem"
                color={feedback.includes("success") ? "green" : "red"}
              >
                {feedback}
              </Text>
            )}
          </>
        )}
      </Flex>
    </View>
  );

  function onCodeDigitChange(
    index: number
  ): React.ChangeEventHandler<HTMLInputElement> | undefined {
    return (e) => {
      const value = e.target.value;
      if (isNumericDigit(value)) {
        const newCode = code.slice();
        newCode[index] = value;
        setCode(newCode);
        const nextInput = inputRefs.current[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      } else if (value === "") {
        const newCode = code.slice();
        newCode[index] = "";
        setCode(newCode);
      }
    };
  }
};

export default ConfirmationCodePage;

function handleBackspaceFocus(
  code: string,
  index: number,
  inputRefs: React.RefObject<(HTMLInputElement | null)[]>
): React.KeyboardEventHandler<HTMLInputElement> | undefined {
  return (e) => {
    if (e.key === "Backspace" && !code[index]) {
      const previousInput = inputRefs.current[index - 1];
      if (previousInput) {
        previousInput.focus();
      }
    }
  };
}
