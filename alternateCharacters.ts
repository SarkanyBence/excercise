function alternatingCharacters(str: string): number {
  const pattern = /[^AB]*/;

  let result = str.match(pattern);

  if (result && result[0].length !== 0) {
    console.log("str contains other characters");
    return -1;
  }
  let shortenedString: String = "";
  let deletion: number = 0;
  let lastChar: string = "";
  const array: string[] = Array.from(str);

  array.forEach((letter: string, index: number) => {
    if (letter !== lastChar) {
      lastChar = letter;
      shortenedString.concat(letter);
    } else {
      deletion += 1;
    }
  });

  return deletion;
}
console.log(alternatingCharacters("almafa"));
console.log(alternatingCharacters("AAAA"));
console.log(alternatingCharacters("BBBBB"));
