import { Button, Icon, Text } from "@aws-amplify/ui-react";

interface CustomButtonProps {
  handleNavigation: (section: string) => void;
  buttonName: string;
  activeSection: string;
  buttonIcon: React.ElementType; // Add buttonIcon property
}

const CustomButton: React.FC<CustomButtonProps> = ({
  handleNavigation,
  buttonName,
  activeSection,
  buttonIcon,
}) => {
  return (
    <Button
      variation="link"
      size="small"
      justifyContent="flex-start"
      color={activeSection === buttonName ? "black" : "white"}
      onClick={() => handleNavigation(buttonName)}
      style={{
        backgroundColor: activeSection === buttonName ? "white" : "transparent",
        borderRadius: "5px",
        padding: "0.5rem",
        transition: "background-color 0.3s, border 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--amplify-colors-red-80)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor =
          activeSection === buttonName ? "white" : "transparent";
        e.currentTarget.style.border = "none";
      }}
    >
      <Icon ariaLabel="Javascript" as={buttonIcon} />
      <Text
        marginLeft="0.5rem"
        color={activeSection === buttonName ? "black" : "white"}
        fontWeight={50}
      >
        {buttonName}
      </Text>
    </Button>
  );
};

export default CustomButton;
