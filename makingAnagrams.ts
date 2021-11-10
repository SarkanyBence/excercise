import { Hash } from "crypto";

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
  let Longer: Map<String, number> =
    aLetters.size < bLetters.size ? bLetters : aLetters;
  let Shorter: Map<String, number> =
    aLetters.size > bLetters.size ? bLetters : aLetters;
  let deleted: number = 0;

  const commonKeys: String[] = Object.keys(Longer).filter((key) =>
    Shorter.has(key)
  );

  let commonMap: Map<String, number> = new Map([...Longer]);

  const sumOfLetters: number = Object.values(Longer).reduce(
    (prev, curr) => prev + curr
  );
  let [shortKeys, shortValues] = Object.entries(Shorter);
  let [longKeys, longValues] = Object.entries(Longer);
  //   for (let i = 0; i < Longer.size; i++) {

  //     if (!longKeys.includes(shortKeys[i])) {
  //       deleted += shortValues[i];
  //       Shorter.delete(shortKeys[i]);
  //     } else if()
  //     if (!shortKeys.includes(longKeys[i])) {
  //       deleted += longValues[i];
  //       Longer.delete(longKeys[i]);
  //     } else {
  //         let shortIndex: number = shortKeys.indexOf(longKeys[i]);
  //       if (shortValues[shortIndex] > longValues[i]) {
  //           deleted += shortValues[shortIndex]-longValues[i];
  //       }
  //       if (shortValues[shortIndex] < longValues[i]) {

  //     }
  //     }
  //   }

  return 0;
}
