function superReducedString(s: string): string {
  let result: string = s;
  let map: Map<string, number> = new Map();

  Array.from(s).forEach((l: string, i: number) => {
    if (map.has(l)) {
      let next: number = map.get(l)! + 1;
      map.set(l, next);
    } else {
      map.set(l, 1);
    }
  });
  Array.from(s).forEach((l) => {
    let v = map.get(l)!;
    if (v >= 2) {
      result = deletePair(result, l);
      map.set(l, v - 2);
    }
  });

  function deletePair(str: string, l: string): string {
    str = str.replace(l, "");
    str = str.replace(l, "");
    return str;
  }

  if (result === "") result = "Empty String";

  return result;
}

console.log(superReducedString("aaabccddd"));
