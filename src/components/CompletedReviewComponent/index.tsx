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
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 600
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Flex
      direction="column"
      gap="1rem"
      padding={{ base: "0.5rem", medium: "1rem" }}
      backgroundColor="#fff5f5"
      borderRadius="8px"
      height="100%"
    >
      {/* Header */}
      <Flex
        direction={{ base: "column", medium: "row" }}
        justifyContent="space-between"
        alignItems={{ base: "flex-start", medium: "center" }}
        gap={{ base: "0.5rem", medium: "1rem" }}
        padding={{ base: "0.5rem", medium: "1rem" }}
      >
        <Text color="grey" fontSize={{ base: "md", medium: "large" }}>
          Completed Review
        </Text>
        <Flex
          gap="0.5rem"
          alignItems="center"
          width={{ base: "100%", medium: "auto" }}
        >
          <Flex
            borderRadius="10px"
            overflow="hidden"
            backgroundColor="#fff"
            width="fit-content"
            gap={0}
            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
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
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setIsModalOpen(true)}
          >
            <Text
              fontSize={{ base: "xs", medium: "small" }}
              color="var(--primary-color)"
            >
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

      {/* Table or List for Mobile */}
      {isMobile ? (
        <Flex direction="column" gap="0.5rem">
          {completedPhrases.map((phrase, idx) => (
            <Flex
              key={idx}
              direction="column"
              backgroundColor="white"
              borderRadius="8px"
              boxShadow="0 1px 4px #0001"
              padding="0.75rem"
            >
              <Flex alignItems="center" gap="0.5rem">
                <Icon
                  as={phrase.status === "Completed" ? MdCheckCircle : MdError}
                  fontSize="1.25rem"
                  color={phrase.status === "Completed" ? "green" : "red"}
                />
                <Text fontWeight="bold">{phrase.phrase}</Text>
              </Flex>
              <Text fontSize="xs" color="gray">
                By: {phrase.reviewedBy}
              </Text>
              <Text fontSize="xs" color="gray">
                At: {phrase.reviewedTime}
              </Text>
            </Flex>
          ))}
        </Flex>
      ) : (
        <View style={{ overflowX: "auto" }}>
          <Table style={{ borderCollapse: "collapse", minWidth: 600 }}>
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
                    <Icon
                      as={
                        phrase.status === "Completed" ? MdCheckCircle : MdError
                      }
                      fontSize="1.5rem"
                      color={phrase.status === "Completed" ? "green" : "red"}
                    />
                  </TableCell>
                  <TableCell>
                    <span style={{ cursor: "pointer" }}>
                      <Text color="navy">{phrase.phrase}</Text>
                    </span>
                  </TableCell>
                  <TableCell>
                    <Text>{phrase.reviewedBy}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{phrase.reviewedTime}</Text>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </View>
      )}

      {/* Pagination */}
      <Flex
        justifyContent="flex-end"
        padding={{ base: "0.5rem", medium: "1rem" }}
        marginTop="auto"
      >
        <Text fontSize={{ base: "xs", medium: "small" }} color="gray">
          1–5 of 5
        </Text>
      </Flex>
    </Flex>
  );
};

export default CompletedReviewComponent;
