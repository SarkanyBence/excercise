function inArray(array1: string[], array2: string[]): string[] {
  let result: string[] = [];

  array1.forEach((sub) => {
    array2.every((word) => {
      if (word.includes(sub)) {
        result.push(sub);
        return false;
      } else {
        return true;
      }
    });
  });

  return result.sort();
}

console.log(
  inArray(
    ["arp", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
console.log(
  inArray(
    ["tarp", "mice", "bull"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
