import { Button, HStack } from "@chakra-ui/react";
import useStore from "../../store/store";

const ConfigPanel = () => {
  const theme = useStore((state) => state.theme);
  const generateSudoku = useStore((state) => state.generateSudokuGrid);
  const solve = useStore((state) => state.solve);
  return (
    <HStack
      rounded="md"
      shadow="base"
      padding="2"
      bgColor={theme === "light" ? "white" : "#2c2f33"}
      border={theme === "light" ? "none" : "1px solid rgba(129,131,132,0.15)"}
    >
      <Button colorScheme="blue" onClick={generateSudoku}>
        Random
      </Button>
      <Button colorScheme="green" onClick={solve}>
        Solve
      </Button>
    </HStack>
  );
};

export default ConfigPanel;
