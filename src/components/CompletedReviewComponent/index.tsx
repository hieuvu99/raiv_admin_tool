"use client";

import React, { useEffect, useState } from "react";
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
import { useAuth } from "@/context/AuthContext";

interface PhraseItem {
  id: string;
  _phraseId?: string;
  _phraseSetId?: string;
  _identityId?: string;
  _uuid?: string;
  _postgresId?: string;
  _filepath?: string;
  _recordedTime?: string;
  _languageId?: string;
  _isValidated?: boolean;
  _validationStatus?: string;
  _validationComment?: string | null;
  _validationRating?: number | null;
  _validatedBy?: string | null;
  _validatedAt?: string | null; // Use string for TemporalDateTime
  _createdAt?: string | null;
  _updatedAt?: string | null;
  phrase?: string; // Added property
  recordedBy?: string; // Also add this if used elsewhere
  recordedTime?: string; // Also add this if used elsewhere
}

const completedPhrases: PhraseItem[] = [
  {
    id: "1",
    _phraseId: "p1",
    _phraseSetId: "set1",
    _identityId: "user1",
    _uuid: "uuid-1",
    _postgresId: "pg-1",
    _filepath: "/audio/1.mp3",
    _recordedTime: "2024-05-16T22:27:00Z",
    _languageId: "0",
    _isValidated: true,
    _validationStatus: "Completed",
    _validationComment: "Good recording.",
    _validationRating: 5,
    _validatedBy: "Sara Child",
    _validatedAt: "2024-05-16T22:27:00Z",
    _createdAt: "2024-05-16T21:00:00Z",
    _updatedAt: "2024-05-16T22:27:00Z",
    phrase: "Angwux da? - Georgux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:27",
  },
  {
    id: "2",
    _phraseId: "p2",
    _phraseSetId: "set1",
    _identityId: "user2",
    _uuid: "uuid-2",
    _postgresId: "pg-2",
    _filepath: "/audio/2.mp3",
    _recordedTime: "2024-05-16T22:27:00Z",
    _languageId: "0",
    _isValidated: true,
    _validationStatus: "Completed",
    _validationComment: "Clear pronunciation.",
    _validationRating: 5,
    _validatedBy: "Sara Child",
    _validatedAt: "2024-05-16T22:27:00Z",
    _createdAt: "2024-05-16T21:05:00Z",
    _updatedAt: "2024-05-16T22:27:00Z",
    phrase: "Angwux da? - Mildredux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:27",
  },
  {
    id: "3",
    _phraseId: "p3",
    _phraseSetId: "set1",
    _identityId: "user3",
    _uuid: "uuid-3",
    _postgresId: "pg-3",
    _filepath: "/audio/3.mp3",
    _recordedTime: "2024-05-16T22:27:00Z",
    _languageId: "0",
    _isValidated: false,
    _validationStatus: "Incompleted",
    _validationComment: "Needs improvement.",
    _validationRating: 2,
    _validatedBy: "Sara Child",
    _validatedAt: "2024-05-16T22:27:00Z",
    _createdAt: "2024-05-16T21:10:00Z",
    _updatedAt: "2024-05-16T22:27:00Z",
    phrase: "Angwux da? - Sprucux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:27",
  },
  {
    id: "4",
    _phraseId: "p4",
    _phraseSetId: "set1",
    _identityId: "user4",
    _uuid: "uuid-4",
    _postgresId: "pg-4",
    _filepath: "/audio/4.mp3",
    _recordedTime: "2024-05-16T22:26:00Z",
    _languageId: "0",
    _isValidated: true,
    _validationStatus: "Completed",
    _validationComment: "Accurate.",
    _validationRating: 5,
    _validatedBy: "Sara Child",
    _validatedAt: "2024-05-16T22:26:00Z",
    _createdAt: "2024-05-16T21:15:00Z",
    _updatedAt: "2024-05-16T22:26:00Z",
    phrase: "Angwux da? - Peterux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:26",
  },
  {
    id: "5",
    _phraseId: "p5",
    _phraseSetId: "set1",
    _identityId: "user5",
    _uuid: "uuid-5",
    _postgresId: "pg-5",
    _filepath: "/audio/5.mp3",
    _recordedTime: "2024-05-16T22:26:00Z",
    _languageId: "0",
    _isValidated: true,
    _validationStatus: "Completed",
    _validationComment: "Well done.",
    _validationRating: 5,
    _validatedBy: "Sara Child",
    _validatedAt: "2024-05-16T22:26:00Z",
    _createdAt: "2024-05-16T21:20:00Z",
    _updatedAt: "2024-05-16T22:26:00Z",
    phrase: "Angwux da? - Bertux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:26",
  },
  // Makah language data (_languageId: "1")
  {
    id: "6",
    _phraseId: "p6",
    _phraseSetId: "set2",
    _identityId: "user6",
    _uuid: "uuid-6",
    _postgresId: "pg-6",
    _filepath: "/audio/6.mp3",
    _recordedTime: "2024-05-17T10:00:00Z",
    _languageId: "1",
    _isValidated: true,
    _validationStatus: "Completed",
    _validationComment: "Excellent clarity.",
    _validationRating: 5,
    _validatedBy: "John Smith",
    _validatedAt: "2024-05-17T10:30:00Z",
    _createdAt: "2024-05-17T09:50:00Z",
    _updatedAt: "2024-05-17T10:30:00Z",
    phrase: "č̓aaʔak ʔiš? - č̓aaʔak ʔiš.",
    recordedBy: "John Smith",
    recordedTime: "17-May-24 10:00",
  },
  {
    id: "7",
    _phraseId: "p7",
    _phraseSetId: "set2",
    _identityId: "user7",
    _uuid: "uuid-7",
    _postgresId: "pg-7",
    _filepath: "/audio/7.mp3",
    _recordedTime: "2024-05-17T10:05:00Z",
    _languageId: "1",
    _isValidated: false,
    _validationStatus: "Incompleted",
    _validationComment: "Background noise present.",
    _validationRating: 3,
    _validatedBy: "John Smith",
    _validatedAt: "2024-05-17T10:35:00Z",
    _createdAt: "2024-05-17T10:00:00Z",
    _updatedAt: "2024-05-17T10:35:00Z",
    phrase: "č̓aaʔak ʔiš? - č̓aaʔak ʔiš.",
    recordedBy: "John Smith",
    recordedTime: "17-May-24 10:05",
  },
  {
    id: "8",
    _phraseId: "p8",
    _phraseSetId: "set2",
    _identityId: "user8",
    _uuid: "uuid-8",
    _postgresId: "pg-8",
    _filepath: "/audio/8.mp3",
    _recordedTime: "2024-05-17T10:10:00Z",
    _languageId: "1",
    _isValidated: true,
    _validationStatus: "Completed",
    _validationComment: "Good intonation.",
    _validationRating: 4,
    _validatedBy: "John Smith",
    _validatedAt: "2024-05-17T10:40:00Z",
    _createdAt: "2024-05-17T10:05:00Z",
    _updatedAt: "2024-05-17T10:40:00Z",
    phrase: "ʔiisaak ʔiš? - ʔiisaak ʔiš.",
    recordedBy: "John Smith",
    recordedTime: "17-May-24 10:10",
  },
  {
    id: "9",
    _phraseId: "p9",
    _phraseSetId: "set2",
    _identityId: "user9",
    _uuid: "uuid-9",
    _postgresId: "pg-9",
    _filepath: "/audio/9.mp3",
    _recordedTime: "2024-05-17T10:15:00Z",
    _languageId: "1",
    _isValidated: true,
    _validationStatus: "Completed",
    _validationComment: "Well articulated.",
    _validationRating: 5,
    _validatedBy: "John Smith",
    _validatedAt: "2024-05-17T10:45:00Z",
    _createdAt: "2024-05-17T10:10:00Z",
    _updatedAt: "2024-05-17T10:45:00Z",
    phrase: "ʔuʔukʷił ʔiš? - ʔuʔukʷił ʔiš.",
    recordedBy: "John Smith",
    recordedTime: "17-May-24 10:15",
  },
  {
    id: "10",
    _phraseId: "p10",
    _phraseSetId: "set2",
    _identityId: "user10",
    _uuid: "uuid-10",
    _postgresId: "pg-10",
    _filepath: "/audio/10.mp3",
    _recordedTime: "2024-05-17T10:20:00Z",
    _languageId: "1",
    _isValidated: true,
    _validationStatus: "Completed",
    _validationComment: "Perfect.",
    _validationRating: 5,
    _validatedBy: "John Smith",
    _validatedAt: "2024-05-17T10:50:00Z",
    _createdAt: "2024-05-17T10:15:00Z",
    _updatedAt: "2024-05-17T10:50:00Z",
    phrase: "ʔuʔukʷił ʔiš? - ʔuʔukʷił ʔiš.",
    recordedBy: "John Smith",
    recordedTime: "17-May-24 10:20",
  },
];

const CompletedReviewComponent: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState("Kwakwala");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 600
  );
  const [makahPhraseSets, setMakahPhraseSets] = useState<PhraseItem[]>([]);
  const [kwakwalaPhraseSets, setKwakwalaPhraseSets] = useState<PhraseItem[]>(
    []
  );
  const [phraseList, setPhraseList] = useState<PhraseItem[]>([]);

  useEffect(() => {
    const kwakwala = completedPhrases.filter((p) => p._languageId === "0");
    const makah = completedPhrases.filter((p) => p._languageId === "1");
    setKwakwalaPhraseSets(kwakwala);
    setMakahPhraseSets(makah);
  }, []);

  useEffect(() => {
    // This effect runs when the component mounts or when activeLanguage changes
    if (activeLanguage === "Kwakwala") {
      setPhraseList(kwakwalaPhraseSets);
    } else if (activeLanguage === "Makha") {
      setPhraseList(makahPhraseSets);
    }
  }, [activeLanguage, kwakwalaPhraseSets, makahPhraseSets]);

  const { user } = useAuth();
  useEffect(() => {
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
          {phraseList.map((phrase, idx) => (
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
                  as={
                    phrase._validationStatus === "Completed"
                      ? MdCheckCircle
                      : MdError
                  }
                  fontSize="1.25rem"
                  color={
                    phrase._validationStatus === "Completed" ? "green" : "red"
                  }
                />
                <Text fontWeight="bold">{phrase.phrase}</Text>
              </Flex>
              <Text fontSize="xs" color="gray">
                {/* This need to working on */}
                By: {user?.firstname + user?.lastname || "Unknown"}
              </Text>
              <Text fontSize="xs" color="gray">
                At: {phrase._createdAt}
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
              {phraseList.map((phrase, index) => (
                <TableRow
                  key={index}
                  style={{
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  <TableCell>
                    <Icon
                      as={
                        phrase._validationStatus === "Completed"
                          ? MdCheckCircle
                          : MdError
                      }
                      fontSize="1.5rem"
                      color={
                        phrase._validationStatus === "Completed"
                          ? "green"
                          : "red"
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <span style={{ cursor: "pointer" }}>
                      <Text color="navy">{phrase.phrase}</Text>
                    </span>
                  </TableCell>
                  <TableCell>
                    {/* This need to working on */}
                    <Text>{user?.firstname + user?.lastname || "Unknown"}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{phrase._createdAt}</Text>
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
