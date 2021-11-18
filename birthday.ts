function birthday(s: number[], d: number, m: number): number {
  let result: number = 0;
  if (d < m) {
    return 0;
  }

  for (let i = 0; i < s.length - m + 1; i++) {
    let subarray = [];
    let sum = 0;
    subarray = s.slice(i, i + m);
    sum = subarray.reduce((prev, curr) => prev + curr);
    if (sum === d) result++;
  }

  return result;
}

console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
// console.log(birthday([4], 4, 1));
// console.log(birthday([1, 2, 1, 3, 2], 3, 2));
