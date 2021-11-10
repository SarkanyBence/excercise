function hourGlass(matrix: number[][]): number {
  if (matrix.length !== 6 || matrix[0].length !== 6)
    throw new Error("Matrix should be 6x6 sized");

  const sums: number[] = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const subMatrix: number[][] = [];
      subMatrix.push(matrix[j].slice(i, i + 3));
      subMatrix.push(matrix[j + 1].slice(i, i + 3));
      subMatrix.push(matrix[j + 2].slice(i, i + 3));

      //   console.log(matrix[j].slice(i, i + 3));
      //   console.log(matrix[j + 1].slice(i, i + 3));
      //   console.log(matrix[j + 2].slice(i, i + 3));
      //   console.log("-----", sums);
      sums.push(returnSum(subMatrix));
    }
  }
  return sums.reduce((prev, curr) => (prev > curr ? prev : curr));
}

const returnSum = (subMatrix: number[][]): number => {
  const array: number[] = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 0 || i === 2) {
        array.push(subMatrix[i][j]);
      }
      if (i === 1 && j === 1) {
        array.push(subMatrix[i][j]);
      }
    }
  }
  const sum: number = array.reduce((prev, current) => prev + current);
  return sum;
};

console.log(
  hourGlass([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
);

console.log(
  hourGlass([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);
