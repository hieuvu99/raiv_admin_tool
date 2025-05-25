import React from "react";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import { MdLogout, MdOutlineSearch } from "react-icons/md";
import styles from "./style.module.css";

interface AppHeaderProps {
  handleLogout: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ handleLogout }) => {
  return (
    <Flex
      direction="column"
      position={{ base: "sticky", medium: "static" }}
      top={{ base: 0, medium: "auto" }}
      backgroundColor="transparent"
      style={{ zIndex: 10 }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <TextField
          label="Search"
          labelHidden
          variation="quiet"
          placeholder="Search your files here..."
          size="small"
          width={{ base: "90%", medium: "300px" }}
          backgroundColor="#f5f5f5"
          borderRadius="8px"
          border="none"
          padding="0.5rem 1rem"
          className={styles.textField}
          outerStartComponent={
            <MdOutlineSearch
              aria-label="Search"
              fontSize="1.2rem"
              color="gray"
              className={styles.searchIcon}
            />
          }
        />
        <Button
          variation="link"
          size="small"
          justifyContent="flex-start"
          color="white"
          onClick={handleLogout}
          display={{ base: "flex", medium: "none" }}
          className={styles.logoutButton}
        >
          <Icon
            aria-label="Logout"
            ariaLabel="Javascript"
            as={MdLogout}
            fontSize="1.5rem"
            color="gray"
          />{" "}
        </Button>
      </Flex>
      <Divider
        orientation="horizontal"
        marginBottom={{ base: 0, medium: "2rem" }}
      />
    </Flex>
  );
};

export default AppHeader;
