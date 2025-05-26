import React from "react";
import { View, Text, Button, Flex } from "@aws-amplify/ui-react";
import "./style.css"; // Assuming you have some basic styles in this file
const ReviewModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <View className="review-modal">
      <Flex
        direction="column"
        width="500px"
        maxHeight="90vh"
        backgroundColor="#f7e4e2"
        borderRadius="12px"
        padding="1.5rem"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.3)"
        overflow="auto" // Makes content scrollable
      >
        {/* Modal Header */}
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginBottom="1rem"
        >
          <Text fontSize="1.25rem" fontWeight="bold" color="#333">
            Review Tips
          </Text>
          <Button onClick={onClose} size="small" variation="link">
            ✕
          </Button>
        </Flex>

        {/* Modal Content */}
        <Text fontSize="1rem" color="#333" marginBottom="0.5rem">
          <strong>1. Match the Original Phrase Exactly</strong>
        </Text>
        <View className="section">
          <ul>
            <li>
              Make sure the recording matches the original phrase exactly.
            </li>
            <li>No missing, extra, or changed words are allowed.</li>
            <li>
              Mismatched recordings can harm AI training by teaching incorrect
              patterns.
            </li>
          </ul>
        </View>

        <Text fontSize="1rem" color="#333" marginBottom="0.5rem">
          <strong>2. Assess Audio Quality</strong>
        </Text>
        <View className="section">
          <ul>
            <li>⭐⭐⭐⭐⭐ Excellent: Crystal clear, perfect match.</li>
            <li>⭐⭐⭐⭐ Good: Minor imperfections, clear and usable.</li>
            <li>⭐⭐⭐ Fair: Understandable with some noise or issues.</li>
            <li>⭐⭐ Poor: Difficult to understand, heavy noise.</li>
            <li>⭐ Very Poor: Hard to understand or incorrect phrase.</li>
          </ul>
        </View>

        <Text fontSize="1rem" color="#333" marginBottom="0.5rem">
          <strong>3. Add Comments If Needed</strong>
        </Text>
        <View className="section">
          <ul>
            <li>
              Add a short comment if you notice any issues like background
              noise, fast speech, or unclear words.
            </li>
            <li>
              Comments help us refine the dataset later for better AI training.
            </li>
          </ul>
        </View>

        <View style={{ marginBottom: "1rem" }}>
          <Text fontSize="1rem" color="#333" lineHeight="1.75">
            <strong>Why This Matters:</strong> High-quality, correctly spoken
            recordings are crucial for building accurate and reliable AI models.
            Your careful review ensures we preserve data integrity and language
            quality for future generations.
          </Text>
        </View>

        <View>
          <Text fontSize="1rem" color="#333" marginBottom="0.5rem">
            <strong>Quick Checklist:</strong>
          </Text>
          <View style={{ paddingLeft: "1.5rem" }}>
            <ul>
              <li>✅ Phrase matches exactly</li>
              <li>✅ Audio is clear and understandable</li>
              <li>✅ Correct rating is given</li>
              <li>✅ Comments are added for any issues</li>
            </ul>
          </View>
        </View>
      </Flex>
    </View>
  );
};

export default ReviewModal;
