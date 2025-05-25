"use client";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "@aws-amplify/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Flex } from "@aws-amplify/ui-react";
import FileUploadComponent from "@/components/FileUploadComponent";
import UploadedFileComponent from "@/components/UploadedFileComponent";
import HistoryComponent from "@/components/HistoryComponent/index";
import PhraseReviewComponent from "@/components/PhraseReviewComponent";
import CompletedReviewComponent from "@/components/CompletedReviewComponent";
import SideBarComponent from "@/components/SideBarComponent";
import BottomNavBar from "@/components/BottomNavBar";
import AppHeader from "@/components/AppHeader";

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
          <AppHeader handleLogout={handleLogout}/>

          {/* Scrollable Content */}
          <div style={{ flex: 1, overflow: "auto" }}>
            {activeSection === "Uploads" && <FileUploadComponent />}
            {activeSection === "History" && <HistoryComponent />}
            {activeSection === "Uploaded Files" && <UploadedFileComponent />}
            {activeSection === "Phrase Review" && <PhraseReviewComponent />}
            {activeSection === "Completed Reviews" && (
              <CompletedReviewComponent />
            )}
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
