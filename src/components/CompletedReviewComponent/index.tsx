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
import { MdCheckCircle, MdError } from "react-icons/md";
import "./style.css";
import { on } from "events";
import ReviewModal from "../ReviewModal";

interface CompletedPhraseItem {
  status: string;
  phrase: string;
  reviewedBy: string;
  reviewedTime: string;
}

const completedPhrases: CompletedPhraseItem[] = [
    {
        status: "Completed",
        phrase: "Angwux da? - Georgux da.",
        reviewedBy: "Sara Child",
        reviewedTime: "16-May-25 22:27",
    },
    {
        status: "Completed",
        phrase: "Angwux da? - Mildredux da.",
        reviewedBy: "Sara Child",
        reviewedTime: "16-May-25 22:27",
    },
    {
        status: "Incompleted",
        phrase: "Angwux da? - Sprucux da.",
        reviewedBy: "Sara Child",
        reviewedTime: "16-May-25 22:27",
    },
    {
        status: "Completed",
        phrase: "Angwux da? - Peterux da.",
        reviewedBy: "Sara Child",
        reviewedTime: "16-May-25 22:26",
    },
    {
        status: "Completed",
        phrase: "Angwux da? - Bertux da.",
        reviewedBy: "Sara Child",
        reviewedTime: "16-May-25 22:26",
    },
];

const CompletedReviewComponent: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState("Kwakwala");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <Text color="grey" fontSize="large">
          Completed Review
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
          <span style={{ cursor: "pointer" }} onClick={() => setIsModalOpen(true)}>
            <Text fontSize="small" color="var(--primary-color)">
              Review Tips
            </Text>
          </span>

          {isModalOpen && (
            <ReviewModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
            />
          )}
        </Flex>
      </Flex>

      {/* Table */}
      <View>
        <Table style={{ borderCollapse: "collapse" }}>
          <TableHead>
            <TableRow>
              <TableCell as="th">Status</TableCell>
              <TableCell as="th">Phrase</TableCell>
              <TableCell as="th">Reviewed By</TableCell>
              <TableCell as="th">Reviewed Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {completedPhrases.map((phrase, index) => (
              <TableRow
                key={index}
                style={{
                  borderBottom: "1px solid #ccc",
                }}
              >
                <TableCell>
                  {phrase.status === "Completed" ? (
                    <Icon as={MdCheckCircle} fontSize="1.5rem" color="green" />
                  ) : (
                    <Icon as={MdError} fontSize="1.5rem" color="red" />
                  )}
                </TableCell>
                <TableCell>
                  <span style={{ cursor: "pointer" }}>
                    <Text color="navy">{phrase.phrase}</Text>
                  </span>
                </TableCell>
                <TableCell>{phrase.reviewedBy}</TableCell>
                <TableCell>{phrase.reviewedTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </View>

      {/* Pagination */}
    <Flex justifyContent="flex-end" padding="1rem" marginTop="auto">
      <Text fontSize="small" color="gray">
        1–5 of 5
      </Text>
    </Flex>
    </Flex>
  );
};

export default CompletedReviewComponent;