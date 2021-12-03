function dup(s: string[]): string[] {
  let result: string[] = [];

  s.forEach((word) => {
    let newWord: string = "";
    Array.from(word).forEach((letter, index) => {
      if (letter !== newWord[newWord.length - 1]) {
        newWord += letter;
      }
    });
    result.push(newWord);
  });

  return result;
}

console.log(dup(["abracadabra", "allottee", "assessee"]));
