import React from "react";
import { Flex, Button, Text } from "@aws-amplify/ui-react";
import {
  MdCloudUpload,
  MdHistory,
  MdOutlineFolder,
  MdOutlineTranscribe,
  MdOutlineStarHalf,
} from "react-icons/md";

interface BottomNavBarProps {
  activeSection: string;
  handleNavigation: (section: string) => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeSection,
  handleNavigation,
}) => (
  <Flex
    position="fixed"
    bottom={0}
    left={0}
    width="100%"
    backgroundColor="var(--primary-color)"
    display={{ base: "flex", medium: "none" }}
    justifyContent="space-between"
    alignItems="center"
    padding="0"
    style={{ zIndex: 100 }}
  >
    <Button
      variation="link"
      color={activeSection === "Uploads" ? "white" : "black"}
      onClick={() => handleNavigation("Uploads")}
      style={{
        flex: 1,
        flexDirection: "column",
        minWidth: 0,
        backgroundColor: "transparent",
      }}
    >
      <MdCloudUpload size={22} />
      <Text fontSize="xs" fontWeight={100}>
        Uploads
      </Text>
    </Button>
    <Button
      variation="link"
      color={activeSection === "History" ? "white" : "black"}
      onClick={() => handleNavigation("History")}
      style={{
        flex: 1,
        flexDirection: "column",
        minWidth: 0,
        backgroundColor: "transparent",
      }}
    >
      <MdHistory size={22} />
      <Text fontSize="xs" fontWeight={100}>
        History
      </Text>
    </Button>
    <Button
      variation="link"
      color={activeSection === "Uploaded Files" ? "white" : "black"}
      onClick={() => handleNavigation("Uploaded Files")}
      style={{
        flex: 1,
        flexDirection: "column",
        minWidth: 0,
        backgroundColor: "transparent",
      }}
    >
      <MdOutlineFolder size={22} />
      <Text fontSize="xs" fontWeight={100}>
        Files
      </Text>
    </Button>
    <Button
      variation="link"
      color={activeSection === "Phrase Review" ? "white" : "black"}
      onClick={() => handleNavigation("Phrase Review")}
      style={{
        flex: 1,
        flexDirection: "column",
        minWidth: 0,
        backgroundColor: "transparent",
      }}
    >
      <MdOutlineTranscribe size={22} />
      <Text fontSize="xs" fontWeight={100}>
        Review
      </Text>
    </Button>
    <Button
      variation="link"
      color={activeSection === "Completed Reviews" ? "white" : "black"}
      onClick={() => handleNavigation("Completed Reviews")}
      style={{
        flex: 1,
        flexDirection: "column",
        minWidth: 0,
        backgroundColor: "transparent",
      }}
    >
      <MdOutlineStarHalf size={22} />
      <Text fontSize="xs" fontWeight={100}>
        Completed
      </Text>
    </Button>
  </Flex>
);

export default BottomNavBar;
