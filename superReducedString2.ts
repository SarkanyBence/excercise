function superReducedString2(s: string): string {
  let result: string = s;

  for (let i = 0; i < s.length - 1; i++) {
    let l: string = s.substr(i, 1);
    let next: string = s.substr(i + 1, 1);
    if (next === l) {
      result = deletePair(result, l);
      i++;
    }
  }

  function deletePair(str: string, l: string): string {
    str = str.replace(l, "");
    str = str.replace(l, "");
    return str;
  }

  if (result === "") result = "Empty String";

  return result;
}
