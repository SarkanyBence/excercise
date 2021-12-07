export function longestRepetition(text: string): [string, number] {
  let result: [string, number] = ["", 0];
  let array: string[] = [...text];

  for (let i = 0; i < array.length; i++) {
    let currentChar = array[i];
    let length: number = 0;
    [...text].splice(i).every((char, j) => {
      if (currentChar === char) {
        length++;
        return true;
      } else {
        return false;
      }
    });
    if (result[1] < length) result = [currentChar, length];
  }

  return result;
}

console.log(longestRepetition("aaaabb"));
console.log(longestRepetition("bbbaaabaaaa"));
console.log(longestRepetition("cbdeuuu900"));
