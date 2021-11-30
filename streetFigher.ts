function fighter(moves: string[]): string[] {
  let result: string[] = [];
  let fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
  ];
  let currentRow: number = 0;
  let currentColumn: number = 0;

  moves.forEach((move) => {
    switch (move) {
      case "up":
        if (currentRow === 1) {
          currentRow = 0;
        }
        result.push(fighters[currentRow][currentColumn]);
        break;
      case "down":
        if (currentRow === 0) {
          currentRow = 1;
        }
        result.push(fighters[currentRow][currentColumn]);
        break;
      case "left":
        if (currentColumn !== 0) {
          currentColumn--;
        } else {
          currentColumn = fighters[0].length - 1;
        }
        result.push(fighters[currentRow][currentColumn]);
        break;
      case "right":
        if (currentColumn !== fighters[0].length - 1) {
          currentColumn++;
        } else {
          currentColumn = 0;
        }
        result.push(fighters[currentRow][currentColumn]);
    }
  });

  return result;
}

console.log(fighter(["up", "left", "right", "left", "left"]));
console.log(
  fighter(["right", "down", "left", "left", "left", "left", "right"])
);
