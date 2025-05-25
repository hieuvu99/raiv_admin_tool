import React, { useRef, useState } from "react";
import { Flex, Heading, Icon, Text } from "@aws-amplify/ui-react";

const SUPPORTED_FORMATS = [
  "mp3", "wav", "aac", "flac", "ogg", "mp4", "mov", "zip", "tar", "rar"
];
const MAX_SIZE_BYTES = 1024 * 1024 * 1024; // 1GB

const FileUploadComponent: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const files = Array.from(e.target.files || []);
    const validFiles: File[] = [];
    for (const file of files) {
      const ext = file.name.split(".").pop()?.toLowerCase();
      if (!ext || !SUPPORTED_FORMATS.includes(ext)) {
        setError(`Unsupported file format: ${file.name}`);
        continue;
      }
      if (file.size > MAX_SIZE_BYTES) {
        setError(`File too large: ${file.name}`);
        continue;
      }
      validFiles.push(file);
    }
    setSelectedFiles(validFiles);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <Flex direction="column" gap="1rem">
      {/* File Upload Section */}
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        border="2px dashed #ccc"
        borderRadius="8px"
        padding={{ base: "1rem", medium: "2rem" }}
        marginBottom="1rem"
        style={{ cursor: "pointer", transition: "border 0.2s" }}
        onClick={handleClick}
        tabIndex={0}
        role="button"
        aria-label="Click to select file"
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") handleClick(); }}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={SUPPORTED_FORMATS.map(f => "." + f).join(",")}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <Heading level={3}>Upload Files</Heading>
        <Icon name="file" fontSize="large" />
        <Text marginTop="1rem" fontSize="small" color="gray">
          Click to select file
        </Text>
        <Text fontSize="small" color="gray">
          Supported format: {SUPPORTED_FORMATS.join(", ")}
        </Text>
        <Text fontSize="small" color="gray">
          Maximum file size: 1 GB
        </Text>
        {error && (
          <Text color="red" fontSize="small" marginTop="0.5rem">
            {error}
          </Text>
        )}
      </Flex>

      {/* Selected Files Section */}
      <Flex direction="column">
        <Heading level={5} marginBottom="1rem">
          Selected files ({selectedFiles.length})
        </Heading>
        {selectedFiles.length === 0 ? (
          <Text fontSize="small" color="gray">No files selected.</Text>
        ) : (
          <Flex as="ul" direction="column" gap="0.5rem" paddingLeft="1rem">
            {selectedFiles.map((file, idx) => (
              <li key={idx}>
                <Text fontSize="small">
                  {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                </Text>
              </li>
            ))}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default FileUploadComponent;