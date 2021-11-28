export const high = (str: string): string => {
  let alphabet: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const wordsMap: Map<string, number> = new Map();

  str.split(" ").forEach((word) => {
    let score: number = 0;
    Array.from(word).forEach((l) => {
      if (alphabet.includes(l)) {
        score += alphabet.indexOf(l) + 1;
      }
    });
    wordsMap.set(word, score);
  });

  let result: [string, number] = ["a", 0];
  for (const entry of wordsMap) {
    console.log(entry[1] > result[1]);

    if (entry[1] > result[1]) {
      result = entry;
    }
  }

  return result[0];
};

console.log(high("what time are we climbing up the volcano"));
