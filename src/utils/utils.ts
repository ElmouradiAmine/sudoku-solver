export const shuffleArray = (array: number[]): number[] => {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const initMatrix = (n: number, m: number): number[][] => {
  const matrix: number[][] = [];
  for (let i = 0; i < n; i++) {
    let row: number[] = [];
    for (let j = 0; j < m; j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
};

export const generateRandomArray = (size: number): number[] => {
  const generatedArray: number[] = [];

  for (let i = 0; i < size; i++) {
    let generatedNum = generateRandomNumber(0, 81);
    while (generatedArray.includes(generatedNum)) {
      generatedNum = generateRandomNumber(0, 81);
    }
    generatedArray.push(generatedNum);
  }
  return generatedArray;
};

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};
