function minimumNumber(n: number, password: string): number {
  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";
  let isNoAdded: boolean = false;
  let isLowerAdded: boolean = false;
  let isUpperAdded: boolean = false;
  let isSpecialAdded: boolean = false;
  let result: number = 0;

  Array.from(password).every((l: string) => {
    if (numbers.includes(l)) {
      isNoAdded = true;
      return true;
    }
    if (lower_case.includes(l)) {
      isLowerAdded = true;
      return true;
    }
    if (upper_case.includes(l)) {
      isUpperAdded = true;
      return true;
    }
    if (special_characters.includes(l)) {
      isSpecialAdded = true;
      return true;
    }
  });
  if (!isNoAdded) {
    result++;
  }
  if (!isLowerAdded) {
    result++;
  }
  if (!isUpperAdded) {
    result++;
  }
  if (!isSpecialAdded) {
    result++;
  }

  if (n + result < 6) result = 6 - n;
  return result;
}

console.log(minimumNumber(11, "#HackerRank"));
