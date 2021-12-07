function validParentheses(parens: string): boolean {
  let result: boolean = true;
  let opened: number = 0;

  [...parens].every((v, i) => {
    switch (v) {
      case "(":
        opened++;
        return true;
      case ")":
        if (opened > 0) {
          opened--;
          return true;
        } else {
          result = false;
          return false;
        }
    }
  });
  if (opened === 0 && result) return true;
  else return false;
}
console.log(validParentheses("()"));
console.log(validParentheses(")(()))"));
console.log(validParentheses("("));
console.log(validParentheses("(())((()())())"));
