export function findUniq(arr: number[]): number {
  let first: number = arr[0];
  let secound: number = arr[1];
  let third: number = arr[2];

  if (first === secound) {
    return arr.find((num) => num !== first)!;
  } else if (first === third) {
    return secound;
  }
  return first;
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
