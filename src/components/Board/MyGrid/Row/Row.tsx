import { Box } from "@chakra-ui/react";
import useStore from "../../../../store/store";
import Cell from "../Cell/Cell";

interface RowProps {
  index: number;
  row: number[];
}
const Row = ({ row, index }: RowProps) => {
  const theme = useStore((state) => state.theme);

  return (
    <Box
      display="grid"
      height="100%"
      width="100%"
      gridTemplateColumns="repeat(9, 1fr)"
      borderBottom={
        index === 2 || index === 5
          ? `3px solid ${theme === "dark" ? "rgba(129,131,132,0.15)" : "black"}`
          : "none"
      }
    >
      {row.map((val, cellIndex) => (
        <Cell
          key={index * 9 + cellIndex}
          num={val}
          index={index * 9 + cellIndex}
        />
      ))}
    </Box>
  );
};

export default Row;
