function findOdd(A: number[]) {
  let results: Map<number, number> = new Map();
  A.forEach((num) => {
    results.set(num, (results.get(num) || 0) + 1);
  });

  for (const [k, v] of results.entries()) {
    if (v % 2 !== 0) return k;
  }
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
