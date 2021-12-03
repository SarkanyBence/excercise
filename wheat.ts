function wheatFromChaff(values: number[]): number[] {
  let negativeCount: number = 0;

  values.forEach((val) => {
    if (val < 0) negativeCount++;
  });

  if (negativeCount === 0 || negativeCount === values.length) {
    return values;
  }

  let deepCopy: number[] = [...values];
  let lastSwapIndex: number = values.length - 1;
  let swapped: number = 0;

  deepCopy.every((val, fromIndex) => {
    if (val > 0 && fromIndex < lastSwapIndex) {
      for (let toIndex = values.length - 1; toIndex > fromIndex; toIndex--) {
        if (values[toIndex] < 0) {
          swap(fromIndex, toIndex);
          lastSwapIndex = toIndex;
          swapped++;
          toIndex = fromIndex;
        }
      }
    }
    if (swapped === negativeCount) return false;
    return true;
  });

  function swap(fromIndex: number, toIndex: number): void {
    let tmp: number = values[fromIndex];
    values[fromIndex] = values[toIndex];
    values[toIndex] = tmp;
  }

  return values;
}

console.log(wheatFromChaff([8, 10, -6, -7, 9]));
