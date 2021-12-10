function sortThePile(
  pileOfTowels: string[],
  weeklyUsedTowels: number[]
): string[] {
  let result: string[] = [...pileOfTowels];

  for (let i = 0; i < weeklyUsedTowels.length; i++) {
    let toWash: string[] = [];
    for (
      let j = result.length - 1;
      j > pileOfTowels.length - (1 + weeklyUsedTowels[i]);
      j--
    ) {
      toWash.push(result.pop()!);
    }
    result.push(...toWash.sort((a, b) => (b === "blue" ? -1 : 1)));
  }

  return result;
}

console.log(sortThePile(["blue", "red", "blue", "red", "blue"], [3]));
