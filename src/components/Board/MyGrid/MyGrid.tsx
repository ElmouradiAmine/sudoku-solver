import { Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import useStore from "../../../store/store";
import Row from "./Row/Row";

const MyGrid = () => {
  const generateSudokuGrid = useStore((state) => state.generateSudokuGrid);
  const sudokuGrid = useStore((state) => state.sudokuGrid);
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    generateSudokuGrid();
  }, []);
  return (
    <Grid
      gridTemplateRows="repeat(9, 1fr)"
      width="700px"
      height="700px"
      margin="auto"
      border={`4px solid ${
        theme === "dark" ? "rgba(129,131,132,0.15)" : "black"
      }`}
    >
      {sudokuGrid.map((row, index) => (
        <Row key={index} row={row} index={index} />
      ))}
    </Grid>
  );
};

export default MyGrid;
