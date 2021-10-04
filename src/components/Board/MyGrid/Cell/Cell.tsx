import { Box, Text } from "@chakra-ui/react";
import useStore from "../../../../store/store";

interface CellProps {
  index: number;
  num: number | undefined;
}

const Cell = ({ num, index }: CellProps) => {
  const visibleIndices = useStore((state) => state.visibleIndices);
  const status = useStore((state) => state.status);
  const theme = useStore((state) => state.theme);

  const getColor = () => {
    if (status === "SOLVED" && !visibleIndices.includes(index)) return "red";
    return theme === "dark" ? "white" : "black";
  };
  return (
    <Box
      border={`1px solid ${
        theme === "dark" ? "rgba(129,131,132,0.15)" : "black"
      }`}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRight={
        index % 9 === 2 || index % 9 === 5
          ? `4px solid ${theme === "dark" ? "rgba(129,131,132,0.15)" : "black"}`
          : `1px solid ${theme === "dark" ? "rgba(129,131,132,0.15)" : "black"}`
      }
    >
      {num !== 0 && (visibleIndices.includes(index) || status === "SOLVED") && (
        <Text fontSize="2xl" color={getColor()}>
          {num}
        </Text>
      )}
    </Box>
  );
};

export default Cell;
