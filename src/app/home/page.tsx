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
import PhraseReviewComponent from "@/components/PhraseReviewComponent";
import CompletedReviewComponent from "@/components/CompletedReviewComponent";
import SideBarComponent from "@/components/SideBarComponent";
import BottomNavBar from "@/components/BottomNavBar";

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
    <>
      <Flex
        height="100vh"
        backgroundColor="var(
    --primary-color
  )"
      >
        {/* Sidebar */}
        <SideBarComponent
          activeSection={activeSection}
          handleNavigation={handleNavigation}
          handleLogout={handleLogout}
          width={{ base: "100vw", medium: "250px" }}
          minWidth="200px"
          maxWidth="300px"
          display={{ base: "none", medium: "flex" }}
        />

        {/* Main Content */}
        <Flex
          flex="1"
          direction="column"
          padding={{ base: "1rem", medium: "2rem" }}
          backgroundColor="white"
        >
          {/* Header */}
            <Flex
            direction="column"
            position={{ base: "sticky", medium: "static" }}
            top={{ base: 0, medium: "auto" }}
            backgroundColor="transparent"
            style={{ zIndex: 10 }}
            >
            <Flex justifyContent="space-between" alignItems="center">
              <TextField
              label="Search"
              labelHidden
              variation="quiet"
              placeholder="Search your files here..."
              size="small"
              width={{ base: "100%", medium: "300px" }}
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
            <Divider orientation="horizontal" marginBottom={{base:0,medium:"2rem"}} />
            </Flex>

          {/* Scrollable Content */}
          <div style={{ flex: 1, overflow: "auto" }}>
            {activeSection === "Uploads" && <FileUploadComponent />}
            {activeSection === "History" && <HistoryComponent />}
            {activeSection === "Uploaded Files" && <UploadedFileComponent />}
            {activeSection === "Phrase Review" && <PhraseReviewComponent />}
            {activeSection === "Completed Reviews" && <CompletedReviewComponent />}
          </div>
        </Flex>
      </Flex>
      {/* Bottom Navigation for Mobile */}
      <BottomNavBar
        activeSection={activeSection}
        handleNavigation={handleNavigation}
      />
    </>
  );
};

export default HomePage;
