function compareTriplets(a: number[], b: number[]): number[] {
  let aSum: number = 0;
  let bSum: number = 0;
  let result: number[] = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) aSum++;
    if (b[i] > a[i]) bSum++;
  }
  result.push(aSum);
  result.push(bSum);
  return result;
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
