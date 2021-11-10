function checkMagazine(magazine: string[], note: string[]): void {
  if (note.length > magazine.length) {
    console.log("No");
    return;
  }

  const sortToMap = (words: string[]): Map<String, String[]> => {
    let tmpMap: Map<String, String[]> = new Map();

    words.forEach((word: string, index: number) => {
      let startChar: String = word.charAt(0);
      let innerWords: String[] = tmpMap.get(startChar)!;
      if (innerWords === undefined) {
        innerWords = [word];
        tmpMap.set(startChar, innerWords);
      } else {
        innerWords.push(word);
        tmpMap.set(startChar, innerWords);
      }
    });
    return tmpMap;
  };

  let magMap: Map<String, String[]> = sortToMap(magazine);
  let noteMap: Map<String, String[]> = sortToMap(note);
  let result: boolean[] = [];
  let delta: number = 0;

  for (let [key, values] of noteMap) {
    if (!magMap.has(key)) {
      break;
    } else {
      const magValues: String[] = magMap.get(key)!;
      values.every((word: String) => {
        let index: number = magValues.indexOf(word as String);
        if (index >= 0) {
          console.log("word", word);
          console.log("magValues", magValues);

          magValues.splice(index, 1);
          console.log("magValues after splice", magValues);
          delta += 1;
          result.push(true);
          return false;
        }
        return true;
      });
    }
  }

  if (result.length === note.length) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

checkMagazine(
  ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"],
  ["ive", "got", "some", "coconuts"]
);
checkMagazine(
  ["give", "me", "one", "grand", "today", "night"],
  ["give", "one", "grand", "today"]
);
