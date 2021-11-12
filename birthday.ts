function birthday(s: number[], d: number, m: number): number {
  let result: number = 0;
  if (d < m) {
    return 0;
  }

  const filtered: number[] = s.filter((num) => num <= d);

  filtered.forEach((num, index) => {
    let needed: number = d - num;
    if (m === 1) {
      needed = d;
    }
    if (num === d) {
      result += 1;
    } else {
      for (let i = index; i < filtered.length - index; i++) {
        if (filtered[i] === needed) {
          result += 1;
        }
      }
    }
  });

  return result;
}

// console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
// console.log(birthday([4], 4, 1));
console.log(birthday([1, 2, 1, 3, 2], 3, 2));
