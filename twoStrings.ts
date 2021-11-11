function twoStrings(s1: string, s2: string): string {
  let result: string = "NO";

  const shorter: string = s1.length < s2.length ? s1 : s2;
  const longer: string = s1.length > s2.length ? s1 : s2;

  const shorterArray: string[] = [];
  for (let i = 0; i < shorter.length; i++) {
    shorterArray.push(shorter[i]);
  }

  shorterArray.every((v) => {
    if (longer.includes(v)) {
      result = "YES";
      return false;
    }
    return true;
  });

  return result;
}
