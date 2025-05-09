"use client";
import { useAuth } from "@/context/AuthContext";
import AuthService from "@/service/AuthServices";
import { signOut } from "@aws-amplify/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "./style.css";

const ConfirmationCodePage: React.FC = () => {
  const { user, setUser } = useAuth();
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);

  const router = useRouter();

  const handleVerify = async () => {
    if (!user) {
      setFeedback("User session is missing. Please go back and try again.");
      return;
    }

    if (code.length !== 6) {
      setFeedback("Please enter a valid 6-digit code.");
      return;
    }

    setIsLoading(true);
    setFeedback(null);

    try {
      // Simulate API call
      const result = await AuthService.confirmVerificationCode(code.join(""));
      if (result.isSignedIn && result.nextStep?.signInStep === "DONE") {
        setUser(result); // Store user in context
        router.push("/home"); // Redirect to the home page after successful verification
      }
    } catch (error) {
      setFeedback("Failed to verify code. Please try again.");
      console.error("Error during verification code confirmation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="confirmation-code-page">
      <div className="confirmation-code-container">
        <h1 className="font-black">Sign In</h1>
        <p className="font-light">
          Enter the confirmation code sent to your email.
        </p>
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
        <button
          onClick={handleVerify}
          className="confirmation-code-button"
          style={{
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
          disabled={isLoading}
        >
          {isLoading ? "Verifying..." : "Verify Code"}
        </button>
        <button
          onClick={() => {
            signOut();
            setUser(null); // Clear user session on cancel
            window.history.back();
          }}
          className="confirmation-code-button"
          style={{
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
          disabled={isLoading}
        >
          Cancel Sign-In
        </button>
        {isLoading && <div className="spinner">Loading...</div>}
        {feedback && <p className="feedback">{feedback}</p>}
      </div>
    </div>
  );

  function onCodeDigitChange(
    index: number
  ): React.ChangeEventHandler<HTMLInputElement> | undefined {
    return (e) => {
      const value = e.target.value;
      if (/^\d$/.test(value)) {
        const newCode = code.slice();
        newCode[index] = value;
        setCode(newCode);
        // Move focus to the next input box
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
