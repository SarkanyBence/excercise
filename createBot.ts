const createBot = (X: number, Y: number): object => {
  const randomBot = {
    name: "Random",
    makeMove: (onTable: number) => {
      let n: number = Math.floor(onTable / Y);
      if (onTable % Y === 0) n--;
      if (onTable === n * Y + 1) n--;
      return onTable - (n * Y + 1);
    },
  };

  return randomBot;
};
