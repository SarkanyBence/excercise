const removeDuplicateIds = (obj: Object): Object => {
  let result: any = {};
  let keys: string[] = Object.keys(obj);
  let values: Array<string[]> = Object.values(obj);
  let sortedKeys = [...keys].sort((a, b) =>
    parseInt(a) > parseInt(b) ? -1 : 1
  );
  let stored: string[] = [];
  console.log(sortedKeys);

  sortedKeys.forEach((key) => {
    let indexOfKey: number = 0;
    keys.every((innerKey, i) => {
      if (key === innerKey) {
        indexOfKey = i;
        return false;
      }
      return true;
    });
    let tmpValues: string[] = [];
    values[indexOfKey].forEach((val) => {
      if (!stored.includes(val)) {
        stored.push(val);
        tmpValues.push(val);
      }
    });
    values[indexOfKey] = tmpValues;
  });
  keys.forEach((key, i) => {
    result[key] = values[i];
  });

  return result;
};

console.log(
  removeDuplicateIds({
    "432": ["A", "A", "B", "D"],
    "53": ["L", "G", "B", "C"],
    "236": ["L", "A", "X", "G", "H", "X"],
    "11": ["P", "R", "S", "D"],
  })
);
