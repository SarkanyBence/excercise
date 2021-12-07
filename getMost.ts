function getMostProfitFromStockQuotes(quotes: number[]): number {
  let result: number = 0;
  quotes.forEach((num, i) => {
    const max: number = quotes
      .slice(i)
      .reduce((prev, curr) => (prev < curr ? curr : prev));
    if (max > num) {
      result += max - num;
    }
  });
  return result;
}

console.log(getMostProfitFromStockQuotes([1, 2, 3, 4, 5, 6]));
console.log(getMostProfitFromStockQuotes([6, 5, 4, 3, 2, 1]));
console.log(getMostProfitFromStockQuotes([1, 6, 5, 10, 8, 7]));
console.log(getMostProfitFromStockQuotes([1, 2, 10, 3, 2, 7, 3, 2]));
