"use client";
import { useAuth } from "@/context/AuthContext";
import AuthService from "@/service/AuthServices";
import { signOut } from "@aws-amplify/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ConfirmationCodePage: React.FC = () => {
  const { user, setUser } = useAuth();
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const router = useRouter();

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setCode(value);
    }
  };

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
      const result = await AuthService.confirmVerificationCode(code);
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
    <div style={styles.page}>
      <div style={styles.container}>
        <h1>Sign In</h1>
        <p>Enter the confirmation code sent to your email.</p>
        <input
          type="text"
          value={code}
          onChange={handleCodeChange}
          placeholder="Enter 6-digit code"
          style={styles.input}
        />
        <button
          onClick={handleVerify}
          style={{
            ...styles.button,
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
          style={{
            ...styles.button,
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
          disabled={isLoading}
        >
          Cancel Sign-In
        </button>
        {isLoading && <div style={styles.spinner}>Loading...</div>}
        {feedback && <p style={styles.feedback}>{feedback}</p>}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    backgroundColor: "var(--primary-color)", // Replace with your app's primary theme color variable
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "40%",
    maxWidth: "400px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "var(--primary-color)", // Replace with your app's primary theme color variable
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
  },
  spinner: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#007bff",
  },
  feedback: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#ff0000",
  },
};

export default ConfirmationCodePage;
