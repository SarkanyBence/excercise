function pigIt(str: string): string {
  let result: string = "";
  const add: string = "ay";
  const marks = /[.,\/#!?$%\^&\*;:{}=\-_`~()]/g;

  str.split(" ").forEach((word, index, array) => {
    if (!word.match(marks)) {
      const first = word.charAt(0);
      result += word.slice(1).concat(first + add);
      if (index !== array.length - 1) {
        result += " ";
      }
    } else {
      result += word;
    }
  });

  return result;
}

console.log(pigIt("Pig latin is cool"));
console.log(pigIt("Hello world !"));
