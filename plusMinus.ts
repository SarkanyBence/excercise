function plusMinus(arr: number[]): void {
  let mult: number = 1000000;

  let pos: number = arr.filter((n) => n > 0).length;
  let neg: number = arr.filter((n) => n < 0).length;
  let zero: number = arr.filter((n) => n === 0).length;

  let total = arr.length;
  if (total === 0) {
    return;
  }
  console.log((Math.round(mult * (pos / total)) / mult).toFixed(6));
  console.log((Math.round(mult * (neg / total)) / mult).toFixed(6));
  console.log((Math.round(mult * (zero / total)) / mult).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
