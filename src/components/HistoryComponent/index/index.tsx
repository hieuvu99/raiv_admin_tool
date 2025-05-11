"use client";

import React from "react";
import { Flex, Text, Icon, View } from "@aws-amplify/ui-react";
import { MdFilePresent, MdDownload } from "react-icons/md";

interface FileItem {
  name: string;
  size: string;
  date: string;
}

const files: FileItem[] = [
  { name: "Makah chat.rtf", size: "42.33 KB", date: "Sun, Apr 27, 2025" },
  { name: "Icon-512.png", size: "15.31 KB", date: "Wed, Aug 28, 2024" },
  { name: "2010_Davidson_Werle.pdf", size: "110.17 KB", date: "Thu, Sep 26, 2024" },
  { name: "app-release.apk", size: "282.15 MB", date: "Thu, Oct 10, 2024" },
  { name: "Screenshot 2024-08-19 at 12.06.52 PM.png", size: "260.96 KB", date: "Wed, Aug 28, 2024" },
  { name: "whaling_in_makah.gif", size: "32.93 KB", date: "Thu, Sep 26, 2024" },
  { name: "FLAIR_Syllabus.docx", size: "27.76 KB", date: "Wed, Aug 28, 2024" },
];

const HistoryComponent: React.FC = () => {
  return (
    <Flex direction="column" gap="1rem" padding="1rem" backgroundColor="#fff5f5" borderRadius="8px">
      {files.map((file, index) => (
        <Flex
          key={index}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          padding="1rem"
          backgroundColor="white"
          borderRadius="8px"
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        >
          {/* File Info */}
          <Flex direction="row" alignItems="center" gap="1rem">
            <Icon as={MdFilePresent} fontSize="1.5rem" color="gray" />
            <Flex direction="column">
              <Text fontWeight="bold">{file.name}</Text>
              <Text fontSize="small" color="gray">
                {file.size}
              </Text>
            </Flex>
          </Flex>

          {/* File Date and Download */}
          <Flex direction="row" alignItems="center" gap="1rem">
            <Text fontSize="small" color="gray">
              {file.date}
            </Text>
            <Icon as={MdDownload} fontSize="1.5rem" color="gray" cursor="pointer" />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default HistoryComponent;