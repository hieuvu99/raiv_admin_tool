import { Flex, Text } from "@aws-amplify/ui-react";
import React from "react";
import "./style.css";

const LoadingScreen: React.FC = () => {
  return (
    <Flex
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
      backgroundColor="var(--primary-color)"
      direction="column"
    >
      <Text as="h1" fontSize="3rem" margin="0" className="lightning-text logo">
        RAIV
      </Text>
      <Text
        marginTop="1rem"
        fontSize="1.1rem"
        className="lightning-text sub-logo"
      >
        First Languages AI Reality
      </Text>
    </Flex>
  );
};

export default LoadingScreen;
