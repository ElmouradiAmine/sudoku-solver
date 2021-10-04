import create from "zustand";
import { devtools } from "zustand/middleware";
import SudokuGenerator from "../core/sudoku-generator";
import { generateRandomArray } from "../utils/utils";

interface Store {
  status: string;
  theme: string;
  sudokuGrid: number[][];
  generateSudokuGrid: () => void;
  visibleIndices: number[];
  generateVisibleIndices: () => void;
  toggleTheme: () => void;
  solve: () => void;
}

const useStore = create<Store>(
  devtools((set, get) => ({
    status: "IDLE",
    theme: "light",
    visibleIndices: [],
    sudokuGrid: Array(9).fill(Array(9).fill(0)),
    solve: () => {
      set({ status: "SOLVED" });
    },
    toggleTheme: () =>
      set((state) => {
        if (state.theme === "light") {
          return { theme: "dark" };
        }
        return { theme: "light" };
      }),
    generateVisibleIndices: () => {
      set({ visibleIndices: generateRandomArray(25) });
    },
    generateSudokuGrid: () =>
      set((state) => {
        state.generateVisibleIndices();
        return {
          sudokuGrid: new SudokuGenerator().generate(),
          status: "IDLE",
        };
      }),
  }))
);

export default useStore;
