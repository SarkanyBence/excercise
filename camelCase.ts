function camelcase(s: string): number {
  let result: number = 1;
  let pattern = /^[A-Z]*$/;

  result += Array.from(s).filter((letter: string) =>
    letter.match(pattern)
  ).length;

  return result;
}

console.log(camelcase("saveChangesInTheEditor"));
