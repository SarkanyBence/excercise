function solution(number: number): number {
  let result: number = 0;
  if (number <= 0) return result;

  for (let i = 0; i < number; i++) {
    result += i % 5 === 0 || i % 3 === 0 ? i : 0;
  }

  return result;
}
