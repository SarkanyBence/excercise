interface StringMap {
  [key: string]: string[],
  [Symbol.iterator]: function* () {
    let properties = Object.keys(this);
    for (let i of properties) {
        yield [i, this[i]];
    }
}

const removeDuplicateIds = (obj: StringMap): Object => {
  let result: Map<string, Set<string>> = new Map();
  console.log("now", [...obj]);
  // let sorted: Map<string, string[]> = Object.entries(obj)
  //   .sort()
  //   .reverse() as Map<string, string[]>;

  return result;
  //
};

console.log(
  removeDuplicateIds({
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
  })
);
