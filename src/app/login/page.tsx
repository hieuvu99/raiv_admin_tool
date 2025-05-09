"use client";
import { useAuth } from "@/context/AuthContext";
import AuthService from "@/service/AuthServices";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "./style.css";

const LoginPage: React.FC = () => {
  const { setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSendCode = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setFeedbackMessage("Please enter a valid email address.");
    }
    // add your code here

    try {
      setIsLoading(true);
      setFeedbackMessage(null); // Reset feedback message
      const user = await AuthService.signIn(email);
      if (
        !user?.isSignedIn &&
        user?.nextStep?.signInStep === "CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE"
      ) {
        setIsLoading(false); // Reset loading state
        setUser(user); // Store user in context
        router.push("/confirmation_code_page"); // Redirect to the next step after successful sign-in
      } else {
        setIsLoading(false); // Reset loading state
        console.log(!user?.isSignedIn);
        console.log(
          user?.nextStep?.signInStep === "CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE"
        );
        setFeedbackMessage(
          "Failed to send confirmation code. Please try again."
        );
      }
    } catch (error) {
      setFeedbackMessage("Failed to send confirmation code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="font-black">Secure Login</h1>
        <p className="font-light">
          Enter your email to receive a confirmation code
        </p>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className="email-input"
          autoComplete="email"
        />
        <button
          onClick={handleSendCode}
          disabled={isLoading}
          className="submit-button"
          style={{
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? "Sending..." : "Send Confirmation Code"}
        </button>
        {isLoading && <div style={{ marginTop: "1rem" }}>Loading...</div>}
        {feedbackMessage && (
          <div
            style={{
              marginTop: "1rem",
              color: feedbackMessage.includes("success") ? "green" : "red",
            }}
          >
            {feedbackMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
