function twoStrings(s1: string, s2: string): string {
  let result: string = "NO";

  const shorter: string = s1.length < s2.length ? s1 : s2;
  const longer: string = s1.length > s2.length ? s1 : s2;

  const shorterArray: Set<String> = new Set();
  for (let i = 0; i < shorter.length; i++) {
    shorterArray.add(shorter[i]);
  }

  const longerArray: Set<String> = new Set();
  for (let i = 0; i < longer.length; i++) {
    longerArray.add(longer[i]);
  }

  shorterArray.forEach((v) => {
    if (longerArray.has(v)) {
      result = "YES";
    }
  });

  return result;
}
