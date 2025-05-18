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
          Recorded Phrases - Pending Review
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
                fontSize: "inherit",
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
                fontSize: "inherit",
              }}
            >
              Makha
            </Button>
          </Flex>
          <span style={{ cursor: "pointer" }}>
            <Text
              fontSize={{ base: "xs", medium: "small" }}
              color="var(--primary-color)"
            >
              Review Tips
            </Text>
          </span>
        </Flex>
      </Flex>

      {/* Table or List for Mobile */}
      {isMobile ? (
        <Flex direction="column" gap="0.5rem">
          {phrases.map((phrase, idx) => (
            <Flex
              key={idx}
              direction="column"
              backgroundColor="white"
              borderRadius="8px"
              boxShadow="0 1px 4px #0001"
              padding="0.75rem"
            >
              <Flex alignItems="center" gap="0.5rem">
                <Icon as={MdMoreHoriz} fontSize="1.25rem" color="orange" />
                <Text fontWeight="bold">{phrase.phrase}</Text>
              </Flex>
              <Text fontSize="xs" color="gray">
                By: {phrase.recordedBy}
              </Text>
              <Text fontSize="xs" color="gray">
                At: {phrase.recordedTime}
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
                      <Text
                        color="navy"
                        fontSize={{ base: "xs", medium: "md" }}
                      >
                        {phrase.phrase}
                      </Text>
                    </span>
                  </TableCell>
                  <TableCell>
                    <Text fontSize={{ base: "xs", medium: "md" }}>
                      {phrase.recordedBy}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text fontSize={{ base: "xs", medium: "md" }}>
                      {phrase.recordedTime}
                    </Text>
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
      >
        <Text fontSize={{ base: "xs", medium: "small" }} color="gray">
          1–10 of 128
        </Text>
      </Flex>
    </Flex>
  );
};

export default PhraseReviewComponent;
