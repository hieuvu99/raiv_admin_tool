"use client";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "@aws-amplify/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  View,
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  Icon,
  TextField,
} from "@aws-amplify/ui-react";
import {
  MdCloudUpload,
  MdHistory,
  MdOutlineFolder,
  MdOutlineSearch,
  MdOutlineStarHalf,
  MdOutlineTranscribe,
} from "react-icons/md";
import CustomButton from "@/components/customButton";
import styles from "./style.module.css";
import FileUploadComponent from "@/components/FileUploadComponent";
import UploadedFileComponent from "@/components/UploadedFileComponent";
import HistoryComponent from "@/components/HistoryComponent/index";
import PhraseReviewComponent from "@/components/PhraseReview";
import CompletedReviewComponent from "@/components/CompletedReviewComponent";

const HomePage: React.FC = () => {
  const router = useRouter();
  const { setUser } = useAuth();
  const [activeSection, setActiveSection] = useState("Uploads");

  const handleLogout = () => {
    signOut();
    setUser(null); // Reset auth state
    router.push("/login"); // Redirect to login
  };

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    console.log(`${section} clicked`);
  };

  return (
    <Flex
      height="100vh"
      backgroundColor="var(
    --primary-color
  )"
    >
      {/* Sidebar */}
      <Flex
        direction="column"
        width="20%"
        padding="1rem"
        color="white"
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

      {/* Main Content */}
      <Flex
        flex="1"
        direction="column"
        padding="2rem"
        backgroundColor="white"
        overflow="auto"
      >
        {/* Header */}
        <Flex justifyContent="space-between" alignItems="center">
          <TextField
            label="Search"
            labelHidden
            variation="quiet"
            placeholder="Search your files here..."
            size="small"
            width="300px"
            backgroundColor="#f5f5f5" // Light background color
            borderRadius="8px" // Rounded corners
            border="none" // Remove underline border
            padding="0.5rem 1rem" // Add padding for better spacing
            className={styles.textField}
            outerStartComponent={
              <Icon
                ariaLabel="Search"
                as={MdOutlineSearch}
                fontSize="1.2rem"
                color="gray"
                style={{
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                  alignSelf: "center", // Align icon vertically
                }}
              />
            }
          />
        </Flex>
        <Divider orientation="horizontal" marginBottom="2rem" />
        {
          /* Uploads Section */
          activeSection === "Uploads" && <FileUploadComponent />
        }
        {
          /* History Section */
          activeSection === "History" && <HistoryComponent />
        }
        {activeSection === "Uploaded Files" && <UploadedFileComponent />}
        {activeSection === "Phrase Review" && <PhraseReviewComponent />}
        {activeSection === "Completed Reviews" && <CompletedReviewComponent />}
      </Flex>
    </Flex>
  );
};

export default HomePage;
