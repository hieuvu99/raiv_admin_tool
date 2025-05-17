"use client";

import React from "react";
import { Flex, Text, Icon, Badge } from "@aws-amplify/ui-react";
import { MdDownload } from "react-icons/md";

interface FileItem {
  name: string;
  size: string;
  date: string;
  email: string;
}

const files: FileItem[] = [
  {
    name: "Makah chat.rtf",
    size: "42.33 KB",
    date: "Sunday, April 27, 2025",
    email: "ffarhan.s@gmail.com",
  },
  {
    name: "Icon-512.png",
    size: "15.31 KB",
    date: "Wednesday, August 28, 2024",
    email: "ffarhan.s@gmail.com",
  },
  {
    name: "2010_Davidson_Werle.pdf",
    size: "110.17 KB",
    date: "Thursday, September 26, 2024",
    email: "ffarhan.s@gmail.com",
  },
  {
    name: "app-release.apk",
    size: "282.15 MB",
    date: "Thursday, October 10, 2024",
    email: "ffarhan.s@gmail.com",
  },
  {
    name: "Screenshot 2024-08-19 at 12.06.52 PM.png",
    size: "260.96 KB",
    date: "Wednesday, August 28, 2024",
    email: "ffarhan.s@gmail.com",
  },
  {
    name: "whaling_in_makah.gif",
    size: "32.93 KB",
    date: "Thursday, September 26, 2024",
    email: "ffarhan.s@gmail.com",
  },
  {
    name: "FLAIR_Syllabus.docx",
    size: "27.76 KB",
    date: "Wednesday, August 28, 2024",
    email: "ffarhan.s@gmail.com",
  },
];

const UploadedFileComponent: React.FC = () => {
  return (
    <Flex
      direction="column"
      gap="1rem"
      padding="1rem"
      backgroundColor="#f9f9f9"
      borderRadius="8px"
    >
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
            <Flex
              backgroundColor="var(--amplify-colors-teal-60)"
              color="white"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="2.5rem"
              height="2.5rem"
            >
              <Badge color="white" size="large">
                {file.name.charAt(0).toUpperCase()}
              </Badge>
            </Flex>
            <Flex direction="column" gap={0}>
                <Text fontWeight="bold" isTruncated >
                {file.name}
                </Text>
              <Text fontSize="small" color="gray">
                {file.size}
              </Text>
              <Text fontSize="small" color="gray">
                {file.email}
              </Text>
            </Flex>
          </Flex>

          {/* File Date and Download */}
          <Flex direction="row" alignItems="center" gap="1rem">
            <Text fontSize="small" color="gray">
              {file.date}
            </Text>
            <Icon
              as={MdDownload}
              fontSize="1.5rem"
              color="gray"
              cursor="pointer"
            />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default UploadedFileComponent;
