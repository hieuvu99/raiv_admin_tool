import React from "react";
import { Flex, Heading, Icon, Text } from "@aws-amplify/ui-react";

const FileUploadComponent: React.FC = () => {
    return (
        <Flex direction="column" gap="1rem">
            {/* File Upload Section */}
            <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                border="2px dashed #ccc"
                borderRadius="8px"
                padding="2rem"
                marginBottom="1rem"
            >
                <Heading level={3}>Upload Files</Heading>
                <Icon name="file" fontSize="large" />
                <Text marginTop="1rem" fontSize="small" color="gray">
                    Click to select file
                </Text>
                <Text fontSize="small" color="gray">
                    Supported format: mp3, wav, aac, flac, ogg, mp4, mov, zip, tar, rar
                </Text>
                <Text fontSize="small" color="gray">
                    Maximum file size: 1 GB
                </Text>
            </Flex>

            {/* File Info Section */}
            <Flex direction="row" justifyContent="space-between">
                <Text fontSize="small" color="gray">
                    Supported format: mp3, wav, aac, flac, ogg, mp4, mov, zip, tar, rar
                </Text>
                <Text fontSize="small" color="gray">
                    Maximum file size: 1 GB
                </Text>
            </Flex>

            {/* Selected Files Section */}
            <Flex direction="column">
                <Heading level={5} marginBottom="1rem">
                    Selected files (0)
                </Heading>
            </Flex>
        </Flex>
    );
};

export default FileUploadComponent;