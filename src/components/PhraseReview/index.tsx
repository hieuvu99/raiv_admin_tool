"use client";

import React, { useState } from "react";
import {
  Flex,
  Text,
  Button,
  View,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Icon,
} from "@aws-amplify/ui-react";
import { MdMoreHoriz } from "react-icons/md";
import "./style.css";

interface PhraseItem {
  status: string;
  phrase: string;
  recordedBy: string;
  recordedTime: string;
}

const phrases: PhraseItem[] = [
  {
    status: "Pending",
    phrase: "Angwux da? - Georgux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:27",
  },
  {
    status: "Pending",
    phrase: "Angwux da? - Mildredux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:27",
  },
  {
    status: "Pending",
    phrase: "Angwux da? - Sprucux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:27",
  },
  {
    status: "Pending",
    phrase: "Angwux da? - Peterux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:26",
  },
  {
    status: "Pending",
    phrase: "Angwux da? - Bertux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:26",
  },
  {
    status: "Pending",
    phrase: "Angwux da? - Erniyux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:26",
  },
  {
    status: "Pending",
    phrase: "Angwux da? - Kathyux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:25",
  },
  {
    status: "Pending",
    phrase: "Angwux da? - Gertiyux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:25",
  },
  {
    status: "Pending",
    phrase: "Angwux da? - Marieyux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:25",
  },
  {
    status: "Pending",
    phrase: "Angwux da? - Mabelux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:24",
  },
];

const PhraseReviewComponent: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState("Kwakwala");

  return (
    <Flex
      direction="column"
      gap="1rem"
      padding="1rem"
      backgroundColor="#fff5f5"
      borderRadius="8px"
      height={"100%"}
    >
      {/* Header */}
      <Flex justifyContent="space-between" alignItems="center" padding="1rem">
        <Text  color={'grey'} fontSize="large">
          Recorded Phrases - Pending Review
        </Text>
        <Flex gap="1rem" alignItems="center">
          <Flex
            borderRadius="10px"
            overflow="hidden"
            backgroundColor="#fff"
            width="fit-content"
            gap={0}
            boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.1)"}
          >
            <Button
              onClick={() => setActiveLanguage("Kwakwala")}
              style={{
                backgroundColor:
                  activeLanguage === "Kwakwala"
                    ? "var(--primary-color)"
                    : "#fff",
                color: activeLanguage === "Kwakwala" ? "#fff" : "#000",
              }}
              className="toggle-button"
            >
              Kwakwala  
            </Button>
            <Button
              onClick={() => setActiveLanguage("Makha")}
              className="toggle-button"
              style={{
                backgroundColor:
                  activeLanguage === "Makha" ? "var(--primary-color)" : "#fff",
                color: activeLanguage === "Makha" ? "#fff" : "#000",
              }}
            >
              Makha
            </Button>
          </Flex>
          <span style={{ cursor: "pointer" }}>
            <Text fontSize="small" color="var(--primary-color)">
              Review Tips
            </Text>
          </span>
        </Flex>
      </Flex>

      {/* Table */}
      <View>
        <Table style={{ borderCollapse: "collapse" }}>
          <TableHead>
            <TableRow>
              <TableCell as="th">Status</TableCell>
              <TableCell as="th">Phrase</TableCell>
              <TableCell as="th">Recorded By</TableCell>
              <TableCell as="th">Recorded Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {phrases.map((phrase, index) => (
              <TableRow
            key={index}
            style={{
              borderBottom: "1px solid #ccc",
            }}
              >
            <TableCell>
              <Icon as={MdMoreHoriz} fontSize="1.5rem" color="orange" />
            </TableCell>
            <TableCell>
              <span style={{ cursor: "pointer" }}>
                <Text color="navy">{phrase.phrase}</Text>
              </span>
            </TableCell>
            <TableCell>{phrase.recordedBy}</TableCell>
            <TableCell>{phrase.recordedTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </View>

      {/* Pagination */}
      <Flex justifyContent="flex-end" padding="1rem">
        <Text fontSize="small" color="gray">
          1–10 of 128
        </Text>
      </Flex>
    </Flex>
  );
};

export default PhraseReviewComponent;
