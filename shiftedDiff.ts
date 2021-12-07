function shiftedDiff(first: string, second: string): number {
  let result: number = -1;
  if (first.length !== second.length) return result;

  let double = first.concat(first);
  if (first === second) return 0;
  if (double.includes(second)) {
    result = first.length - double.indexOf(second);
  }

  return result;
}

console.log(shiftedDiff("eecoff", "coffee"));
