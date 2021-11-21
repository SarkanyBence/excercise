function gemstones(arr: string[]): number {
  let result: Set<string> = new Set();

  for (const str of arr) {
    Array.from(str).forEach((l) => {
      let allHas: boolean = true;
      arr.every((subStr) => {
        if (!subStr.includes(l)) {
          allHas = false;
          return false;
        } else {
          return true;
        }
      });
      if (allHas) result.add(l);
    });
  }

  return result.size;
}

console.log(gemstones(["abcdde", "baccd", "eeabg"]));
