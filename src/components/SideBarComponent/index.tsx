import React from "react";
import { Flex, Heading, Text, Button, Icon } from "@aws-amplify/ui-react";
import {
  MdCloudUpload,
  MdHistory,
  MdOutlineFolder,
  MdOutlineTranscribe,
  MdOutlineStarHalf,
} from "react-icons/md";
import CustomButton from "@/components/customButton";

interface SideBarProps {
  activeSection: string;
  handleNavigation: (section: string) => void;
  handleLogout: () => void;
}

const SideBarComponent: React.FC<
  SideBarProps & React.ComponentProps<typeof Flex>
> = ({ activeSection, handleNavigation, handleLogout, ...flexProps }) => (
  <Flex
    direction="column"
    width="20%"
    padding="1rem"
    color="white"
    {...flexProps}
    style={{ flexDirection: "column" }}
  >
    {/* Sidebar Header */}
    <Flex
      direction="column"
      gap="0.5rem"
      marginTop={"2rem"}
      marginBottom="2rem"
      style={{ justifyContent: "center" }}
    >
      <Heading level={4} color="white" fontWeight={50}>
        RAIV <span style={{ fontStyle: "italic" }}>admin</span>
      </Heading>
      <Text fontSize="small" color="white">
        ffarhan.s@gmail.com
      </Text>
    </Flex>

    {/* Sidebar Navigation */}
    <Flex direction="column" gap="1rem" marginBottom="2rem">
      <Text fontSize="small" color="white" fontWeight={50}>
        Admin Panel
      </Text>
      <Flex direction="column" gap="1rem">
        <CustomButton
          activeSection={activeSection}
          handleNavigation={handleNavigation}
          buttonName="Uploads"
          buttonIcon={MdCloudUpload}
        />
        <CustomButton
          activeSection={activeSection}
          handleNavigation={handleNavigation}
          buttonName="History"
          buttonIcon={MdHistory}
        />
      </Flex>
    </Flex>

    {/* Admin Panel */}
    <Flex direction="column" gap="1rem" marginBottom="2rem">
      <Text fontSize="small" color="white" fontWeight={50}>
        Admin Panel
      </Text>
      <Flex direction="column" gap="1rem" color={"white"}>
        <CustomButton
          activeSection={activeSection}
          handleNavigation={handleNavigation}
          buttonName="Uploaded Files"
          buttonIcon={MdOutlineFolder}
        />
        <CustomButton
          activeSection={activeSection}
          handleNavigation={handleNavigation}
          buttonName="Phrase Review"
          buttonIcon={MdOutlineTranscribe}
        />
        <CustomButton
          activeSection={activeSection}
          handleNavigation={handleNavigation}
          buttonName="Completed Reviews"
          buttonIcon={MdOutlineStarHalf}
        />
      </Flex>
    </Flex>

    {/* Logout Button */}
    <Flex direction="column" marginTop="auto">
      <Button
        variation="link"
        size="small"
        justifyContent="flex-start"
        color="white"
        onClick={handleLogout}
        style={{
          borderRadius: "5px",
          padding: "0.5rem",
        }}
      >
        <Icon name="logout" />
        <Text marginLeft="0.5rem">Logout</Text>
      </Button>
    </Flex>
  </Flex>
);

export default SideBarComponent;
