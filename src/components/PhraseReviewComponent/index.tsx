"use client";

import React, { use, useEffect, useState } from "react";
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

const phrases = [
  // Kwakwala (languageId: "0")
  {
    id: "1",
    _phraseId: "phrase-1",
    _phraseSetId: "set-1",
    _identityId: "identity-1",
    _uuid: "uuid-1",
    _postgresId: "pg-1",
    _filepath: "/audio/phrase-1.mp3",
    _recordedTime: "2024-05-16T22:27:00Z",
    _languageId: "0",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:27:00Z",
    _updatedAt: "2024-05-16T22:27:00Z",
    phrase: "Angwux da? - Georgux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:27",
  },
  {
    id: "2",
    _phraseId: "phrase-2",
    _phraseSetId: "set-1",
    _identityId: "identity-1",
    _uuid: "uuid-2",
    _postgresId: "pg-2",
    _filepath: "/audio/phrase-2.mp3",
    _recordedTime: "2024-05-16T22:27:00Z",
    _languageId: "0",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:27:00Z",
    _updatedAt: "2024-05-16T22:27:00Z",
    phrase: "Angwux da? - Mildredux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:27",
  },
  {
    id: "3",
    _phraseId: "phrase-3",
    _phraseSetId: "set-1",
    _identityId: "identity-1",
    _uuid: "uuid-3",
    _postgresId: "pg-3",
    _filepath: "/audio/phrase-3.mp3",
    _recordedTime: "2024-05-16T22:27:00Z",
    _languageId: "0",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:27:00Z",
    _updatedAt: "2024-05-16T22:27:00Z",
    phrase: "Angwux da? - Sprucux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:27",
  },
  {
    id: "4",
    _phraseId: "phrase-4",
    _phraseSetId: "set-1",
    _identityId: "identity-1",
    _uuid: "uuid-4",
    _postgresId: "pg-4",
    _filepath: "/audio/phrase-4.mp3",
    _recordedTime: "2024-05-16T22:26:00Z",
    _languageId: "0",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:26:00Z",
    _updatedAt: "2024-05-16T22:26:00Z",
    phrase: "Angwux da? - Peterux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:26",
  },
  {
    id: "5",
    _phraseId: "phrase-5",
    _phraseSetId: "set-1",
    _identityId: "identity-1",
    _uuid: "uuid-5",
    _postgresId: "pg-5",
    _filepath: "/audio/phrase-5.mp3",
    _recordedTime: "2024-05-16T22:26:00Z",
    _languageId: "0",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:26:00Z",
    _updatedAt: "2024-05-16T22:26:00Z",
    phrase: "Angwux da? - Bertux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:26",
  },
  {
    id: "6",
    _phraseId: "phrase-6",
    _phraseSetId: "set-1",
    _identityId: "identity-1",
    _uuid: "uuid-6",
    _postgresId: "pg-6",
    _filepath: "/audio/phrase-6.mp3",
    _recordedTime: "2024-05-16T22:26:00Z",
    _languageId: "0",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:26:00Z",
    _updatedAt: "2024-05-16T22:26:00Z",
    phrase: "Angwux da? - Erniyux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:26",
  },
  {
    id: "7",
    _phraseId: "phrase-7",
    _phraseSetId: "set-1",
    _identityId: "identity-1",
    _uuid: "uuid-7",
    _postgresId: "pg-7",
    _filepath: "/audio/phrase-7.mp3",
    _recordedTime: "2024-05-16T22:25:00Z",
    _languageId: "0",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:25:00Z",
    _updatedAt: "2024-05-16T22:25:00Z",
    phrase: "Angwux da? - Kathyux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:25",
  },
  {
    id: "8",
    _phraseId: "phrase-8",
    _phraseSetId: "set-1",
    _identityId: "identity-1",
    _uuid: "uuid-8",
    _postgresId: "pg-8",
    _filepath: "/audio/phrase-8.mp3",
    _recordedTime: "2024-05-16T22:25:00Z",
    _languageId: "0",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:25:00Z",
    _updatedAt: "2024-05-16T22:25:00Z",
    phrase: "Angwux da? - Gertiyux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:25",
  },
  {
    id: "9",
    _phraseId: "phrase-9",
    _phraseSetId: "set-1",
    _identityId: "identity-1",
    _uuid: "uuid-9",
    _postgresId: "pg-9",
    _filepath: "/audio/phrase-9.mp3",
    _recordedTime: "2024-05-16T22:25:00Z",
    _languageId: "0",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:25:00Z",
    _updatedAt: "2024-05-16T22:25:00Z",
    phrase: "Angwux da? - Marieyux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:25",
  },
  {
    id: "10",
    _phraseId: "phrase-10",
    _phraseSetId: "set-1",
    _identityId: "identity-1",
    _uuid: "uuid-10",
    _postgresId: "pg-10",
    _filepath: "/audio/phrase-10.mp3",
    _recordedTime: "2024-05-16T22:24:00Z",
    _languageId: "1", // makahPhraseSets
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:24:00Z",
    _updatedAt: "2024-05-16T22:24:00Z",
    phrase: "Angwux da? - Mabelux da.",
    recordedBy: "Sara Child",
    recordedTime: "16-May-25 22:24",
  },
  // Makah (languageId: "1") - 9 more dummies
  {
    id: "11",
    _phraseId: "phrase-11",
    _phraseSetId: "set-2",
    _identityId: "identity-2",
    _uuid: "uuid-11",
    _postgresId: "pg-11",
    _filepath: "/audio/phrase-11.mp3",
    _recordedTime: "2024-05-16T22:24:00Z",
    _languageId: "1",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:24:00Z",
    _updatedAt: "2024-05-16T22:24:00Z",
    phrase: "Makah phrase 1 - Example.",
    recordedBy: "John Doe",
    recordedTime: "16-May-25 22:24",
  },
  {
    id: "12",
    _phraseId: "phrase-12",
    _phraseSetId: "set-2",
    _identityId: "identity-2",
    _uuid: "uuid-12",
    _postgresId: "pg-12",
    _filepath: "/audio/phrase-12.mp3",
    _recordedTime: "2024-05-16T22:23:00Z",
    _languageId: "1",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:23:00Z",
    _updatedAt: "2024-05-16T22:23:00Z",
    phrase: "Makah phrase 2 - Example.",
    recordedBy: "John Doe",
    recordedTime: "16-May-25 22:23",
  },
  {
    id: "13",
    _phraseId: "phrase-13",
    _phraseSetId: "set-2",
    _identityId: "identity-2",
    _uuid: "uuid-13",
    _postgresId: "pg-13",
    _filepath: "/audio/phrase-13.mp3",
    _recordedTime: "2024-05-16T22:22:00Z",
    _languageId: "1",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:22:00Z",
    _updatedAt: "2024-05-16T22:22:00Z",
    phrase: "Makah phrase 3 - Example.",
    recordedBy: "John Doe",
    recordedTime: "16-May-25 22:22",
  },
  {
    id: "14",
    _phraseId: "phrase-14",
    _phraseSetId: "set-2",
    _identityId: "identity-2",
    _uuid: "uuid-14",
    _postgresId: "pg-14",
    _filepath: "/audio/phrase-14.mp3",
    _recordedTime: "2024-05-16T22:21:00Z",
    _languageId: "1",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:21:00Z",
    _updatedAt: "2024-05-16T22:21:00Z",
    phrase: "Makah phrase 4 - Example.",
    recordedBy: "John Doe",
    recordedTime: "16-May-25 22:21",
  },
  {
    id: "15",
    _phraseId: "phrase-15",
    _phraseSetId: "set-2",
    _identityId: "identity-2",
    _uuid: "uuid-15",
    _postgresId: "pg-15",
    _filepath: "/audio/phrase-15.mp3",
    _recordedTime: "2024-05-16T22:20:00Z",
    _languageId: "1",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:20:00Z",
    _updatedAt: "2024-05-16T22:20:00Z",
    phrase: "Makah phrase 5 - Example.",
    recordedBy: "John Doe",
    recordedTime: "16-May-25 22:20",
  },
  {
    id: "16",
    _phraseId: "phrase-16",
    _phraseSetId: "set-2",
    _identityId: "identity-2",
    _uuid: "uuid-16",
    _postgresId: "pg-16",
    _filepath: "/audio/phrase-16.mp3",
    _recordedTime: "2024-05-16T22:19:00Z",
    _languageId: "1",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:19:00Z",
    _updatedAt: "2024-05-16T22:19:00Z",
    phrase: "Makah phrase 6 - Example.",
    recordedBy: "John Doe",
    recordedTime: "16-May-25 22:19",
  },
  {
    id: "17",
    _phraseId: "phrase-17",
    _phraseSetId: "set-2",
    _identityId: "identity-2",
    _uuid: "uuid-17",
    _postgresId: "pg-17",
    _filepath: "/audio/phrase-17.mp3",
    _recordedTime: "2024-05-16T22:18:00Z",
    _languageId: "1",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:18:00Z",
    _updatedAt: "2024-05-16T22:18:00Z",
    phrase: "Makah phrase 7 - Example.",
    recordedBy: "John Doe",
    recordedTime: "16-May-25 22:18",
  },
  {
    id: "18",
    _phraseId: "phrase-18",
    _phraseSetId: "set-2",
    _identityId: "identity-2",
    _uuid: "uuid-18",
    _postgresId: "pg-18",
    _filepath: "/audio/phrase-18.mp3",
    _recordedTime: "2024-05-16T22:17:00Z",
    _languageId: "1",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:17:00Z",
    _updatedAt: "2024-05-16T22:17:00Z",
    phrase: "Makah phrase 8 - Example.",
    recordedBy: "John Doe",
    recordedTime: "16-May-25 22:17",
  },
  {
    id: "19",
    _phraseId: "phrase-19",
    _phraseSetId: "set-2",
    _identityId: "identity-2",
    _uuid: "uuid-19",
    _postgresId: "pg-19",
    _filepath: "/audio/phrase-19.mp3",
    _recordedTime: "2024-05-16T22:16:00Z",
    _languageId: "1",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:16:00Z",
    _updatedAt: "2024-05-16T22:16:00Z",
    phrase: "Makah phrase 9 - Example.",
    recordedBy: "John Doe",
    recordedTime: "16-May-25 22:16",
  },
  {
    id: "20",
    _phraseId: "phrase-20",
    _phraseSetId: "set-2",
    _identityId: "identity-2",
    _uuid: "uuid-20",
    _postgresId: "pg-20",
    _filepath: "/audio/phrase-20.mp3",
    _recordedTime: "2024-05-16T22:15:00Z",
    _languageId: "1",
    _isValidated: false,
    _validationStatus: "Pending",
    _validationComment: null,
    _validationRating: null,
    _validatedBy: null,
    _validatedAt: null,
    _createdAt: "2024-05-16T22:15:00Z",
    _updatedAt: "2024-05-16T22:15:00Z",
    phrase: "Makah phrase 10 - Example.",
    recordedBy: "John Doe",
    recordedTime: "16-May-25 22:15",
  },
];

const PhraseReviewComponent: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState("Kwakwala");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 600
  );
  const [makahPhraseSets, setMakahPhraseSets] = useState<PhraseItem[]>([]);
  const [kwakwalaPhraseSets, setKwakwalaPhraseSets] = useState<PhraseItem[]>(
    []
  );
  const [phraseList, setPhraseList] = useState<PhraseItem[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const kwakwala = phrases.filter((p) => p._languageId === "0");
    const makah = phrases.filter((p) => p._languageId === "1");
    setKwakwalaPhraseSets(kwakwala);
    setMakahPhraseSets(makah);
  },[]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // This effect runs when the component mounts or when activeLanguage changes
    if (activeLanguage === "Kwakwala") {
      setPhraseList(kwakwalaPhraseSets);
    } else if (activeLanguage === "Makha") {
      setPhraseList(makahPhraseSets);
    }
  },[activeLanguage, kwakwalaPhraseSets, makahPhraseSets]);

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
                <Icon as={MdMoreHoriz} fontSize="1.25rem" color="orange" />
                <Text fontWeight="bold">{phrase.phrase}</Text>
              </Flex>
              <Text fontSize="xs" color="gray">

                {/* This need to working on  */}
                By: {user?.firstname + user?.lastname || "Unknown"}
              </Text>
              <Text fontSize="xs" color="gray">
                At: {phrase._createdAt || "Unknown"}
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
              {phraseList.map((phrase, index) => (
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
                      
                      {/* this need to be working on */}

                      {/* This need to working on  */}
                      {user?.firstname + user?.lastname || "Unknown"}
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
