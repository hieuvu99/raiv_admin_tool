"use client";
import { useAuth } from "@/context/AuthContext";
import AuthService from "@/service/AuthServices";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  View,
  Flex,
  Heading,
  Text,
  TextField,
  Button,
  Loader,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./style.css"; // Import your CSS file

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
      return;
    }

    try {
      setIsLoading(true);
      setFeedbackMessage(null); // Reset feedback message
      const user = await AuthService.signIn(email);
      if (
        !user?.isSignedIn &&
        user?.nextStep?.signInStep === "CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE"
      ) {
        setUser(user); // Store user in context
        router.push("/confirmation_code_page"); // Redirect to the next step after successful sign-in
      } else {
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
    <View
      className="login-page"
      height="100vh"
      display="flex"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Flex
        className="login-container"
        direction="column"
        alignItems="center"
        padding={{ base: "1rem", medium: "2rem" }}
        backgroundColor="white"
        borderRadius="8px"
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
        width={{ base: "90vw", small: "350px", medium: "400px" }}
        maxWidth="95vw"
        minWidth={{ base: "unset", medium: "350px" }}
        paddingBlock={{ base: "2rem", medium: "4rem" }}
      >
        <Heading
          level={3}
          className="font-black"
          marginBottom="1rem"
          fontSize={{ base: "1.5rem", medium: "2rem" }}
          textAlign="center"
        >
          Secure Login
        </Heading>
        <Text
          className="font-light"
          fontSize={{ base: "sm", medium: 12 }}
          textAlign="center"
          marginBottom="1rem"
        >
          Please enter your email address to continue. We will send you a
          confirmation code to verify your identity.
        </Text>
        <TextField
          label=""
          labelHidden
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          autoComplete="email"
          size="large"
          variation="quiet"
          marginBottom="1rem"
          className="email-input"
          isRequired={true}
          width="100%"
        />
        <Button
          onClick={handleSendCode}
          isLoading={isLoading}
          loadingText="Sending..."
          variation="primary"
          size="large"
          isDisabled={isLoading}
          className="submit-button"
          width={{ base: "100%", medium: "70%" }}
          marginBottom="1rem"
        >
          Send Confirmation Code
        </Button>
        <div style={{ width: "100%" }}>
          {feedbackMessage && (
            <Text
              marginTop="1rem"
              color={feedbackMessage.includes("success") ? "green" : "red"}
              fontSize={{ base: "sm", medium: "md" }}
              textAlign="center"
            >
              {feedbackMessage}
            </Text>
          )}
        </div>
      </Flex>
    </View>
  );
};

export default LoginPage;
