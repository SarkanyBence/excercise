function timeConversion(s: string): string {
  let sToMod: string = s.slice(0, s.length - 2);
  let hour: number = Number(sToMod.slice(0, 2));
  let result: string = "";
  let modHour: string = "";

  if (s.includes("PM")) {
    if (hour === 12) {
      modHour = "12";
    } else {
      modHour = (hour + 12) as unknown as string;
    }
  } else if (s.includes("AM")) {
    if (hour === 12) {
      modHour = "00";
    } else {
      modHour = s.slice(0, 2);
    }
  }
  result = modHour + sToMod.slice(2, sToMod.length);

  return result;
}

console.log(timeConversion("12:40:22AM"));
