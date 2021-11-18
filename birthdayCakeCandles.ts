function birthdayCakeCandles(candles: number[]): number {
  let result: number = 0;
  let max: number = candles.reduce((prev, curr) => (prev > curr ? prev : curr));

  result = candles.filter((n) => n === max).length;

  return result;
}
