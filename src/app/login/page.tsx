"use client";
import { useAuth } from "@/context/AuthContext";
import AuthService from "@/service/AuthServices";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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
      const user = await AuthService.signIn(email);
      console.log(user.nextStep!.signInStep)
      console.log(user.isSignedIn)
      if (!user?.isSignedIn && user?.nextStep?.signInStep === 'CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE') {
        setIsLoading(false); // Reset loading state
        setUser(user); // Store user in context
        router.push('/confirmation_code_page'); // Redirect to the next step after successful sign-in
      } else {
        setIsLoading(false); // Reset loading state
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
    <div
      style={{
        backgroundColor: "var(--primary-color)", // Replace with your app's primary theme color variable
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "40%",
          maxWidth: "400px",
        }}
      >
        <h1 className="font-black">Secure Login</h1>
        <p className="font-black">
          Enter your email to receive a confirmation code
        </p>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          style={{
            width: "100%",
            padding: "0.5rem",
            margin: "1rem 0",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSendCode}
          disabled={isLoading}
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "var(--primary-color)", // Replace with your app's primary theme color variable
            color: "white",
            border: "none",
            borderRadius: "4px",
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
