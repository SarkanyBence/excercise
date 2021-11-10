function makeAnagram(a: string, b: string): number {
  function pushToMap(str: string): Map<String, number> {
    let map: Map<String, number> = new Map();
    for (let i = 0; i < str.length; i++) {
      const key: string = str.charAt(i);
      const value: number = map.has(key) ? map.get(key)! : 0;
      map.set(key, value + 1);
    }

    return map;
  }

  let aLetters: Map<String, number> = pushToMap(a);
  let bLetters: Map<String, number> = pushToMap(b);

  let deletionMap: Map<String, number> = new Map();
  let commonMap: Map<String, number> = new Map();

  aLetters.forEach((v, k) => {
    if (bLetters.has(k)) {
      commonMap.set(k, v);
    } else {
      deletionMap.set(k, v);
    }
  });

  bLetters.forEach((v, k) => {
    if (commonMap.has(k)) {
      if (v > commonMap.get(k)!) {
        deletionMap.set(k, v - commonMap.get(k)!);
      } else if (v < commonMap.get(k)!) {
        deletionMap.set(k, commonMap.get(k)! - v);
        commonMap.set(k, v);
      }
    } else {
      deletionMap.set(k, v);
    }
  });

  let deleted: number = 0;
  deletionMap.forEach((v, k) => (deleted = deleted + v));

  return deleted;
}

console.log(makeAnagram("cde", "abc"));
