function pascalsTriangle(n: number): string {
  let result: number[] = [];
  let rows: number[][] = [];

  for (let i = 1; i <= n; i++) {
    let row: number[] = [];
    for (let j = 0; j < i; j++) {
      if (i > 2 && j > 0 && j < i - 1) {
        row.push(rows[i - 2][j - 1] + rows[i - 2][j]);
      } else {
        row.push(1);
      }
    }
    rows.push(row);
  }
  rows.forEach((row) => {
    result.push(...row);
  });

  return `[${result.toString()}]`;
}

console.log(pascalsTriangle(1));
console.log(pascalsTriangle(2));
console.log(pascalsTriangle(4));
console.log(pascalsTriangle(60));
