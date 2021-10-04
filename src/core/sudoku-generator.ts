import { initMatrix, shuffleArray } from "../utils/utils";

class SudokuGenerator {
  private n: number = 3;
  private N: number = this.n * this.n;
  private rows: number[][];
  private columns: number[][];
  private boxes: number[][];
  private board: number[][];
  private sudokuSolved: boolean;

  constructor() {
    this.rows = initMatrix(9, 10);
    this.columns = initMatrix(9, 10);
    this.boxes = initMatrix(9, 10);
    this.board = initMatrix(9, 9);
    this.sudokuSolved = false;
  }

  private couldPlace(d: number, row: number, col: number): boolean {
    let idx = Math.floor(row / this.n) * this.n + Math.floor(col / this.n);

    return this.rows[row][d] + this.columns[col][d] + this.boxes[idx][d] === 0;
  }

  private placeNumber(d: number, row: number, col: number): void {
    let idx = Math.floor(row / this.n) * this.n + Math.floor(col / this.n);
    this.rows[row][d]++;
    this.columns[col][d]++;
    this.boxes[idx][d]++;
    this.board[row][col] = d;
  }

  private removeNumber(d: number, row: number, col: number): void {
    let idx = Math.floor(row / this.n) * this.n + Math.floor(col / this.n);
    this.rows[row][d]--;
    this.columns[col][d]--;
    this.boxes[idx][d]--;
    this.board[row][col] = 0;
  }

  private placeNextNumbers(row: number, col: number) {
    if (col === this.N - 1 && row === this.N - 1) {
      this.sudokuSolved = true;
    } else {
      if (col === this.N - 1) {
        this.backtrack(row + 1, 0);
      } else this.backtrack(row, col + 1);
    }
  }

  private backtrack(row: number, col: number) {
    console.log(row);
    if (this.board[row][col] === 0) {
      const random = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      for (let d of random) {
        if (this.couldPlace(d, row, col)) {
          this.placeNumber(d, row, col);
          this.placeNextNumbers(row, col);
          if (this.sudokuSolved === false) this.removeNumber(d, row, col);
        }
      }
    } else this.placeNextNumbers(row, col);
  }

  public generate(): number[][] {
    this.backtrack(0, 0);
    return this.board;
  }
}
export default SudokuGenerator;
