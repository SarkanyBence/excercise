function rotLeft(a: number[], d: number): number[] {
  let rotated: number[] = Object.assign([], a);
  let minus: boolean = false;
  if (d < 0) {
    minus = true;
    d = d * -1;
    rotated = rotated.reverse();
  }
  for (let i = 0; i < d; i++) {
    let first: number = rotated.shift()!;
    rotated.push(first);
  }
  if (minus) {
    rotated = rotated.reverse();
  }

  return rotated;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));
console.log(rotLeft([1, 2, 3, 4, 5], -2));
