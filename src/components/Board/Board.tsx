import { HStack } from "@chakra-ui/react";
import useStore from "../../store/store";
import MyGrid from "./MyGrid/MyGrid";

const Board = () => {
  const theme = useStore((state) => state.theme);

  return (
    <HStack
      as="section"
      bgColor={theme === "light" ? "white" : "#2c2f33"}
      border={theme === "light" ? "none" : "1px solid rgba(129,131,132,0.15)"}
      height="100%"
      maxW="1140px"
      margin="auto"
      rounded="md"
      shadow="md"
      spacing="0.5"
      padding="8"
    >
      <MyGrid />
    </HStack>
  );
};

export default Board;
