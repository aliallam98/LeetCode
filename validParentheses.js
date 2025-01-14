const isValidParentheses = (string) => {
  const stack = [];
  const mapping = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const s of string) {
    if (s === "(" || s === "{" || s === "[") {
      stack.push(s);
    } else if (stack.pop() !== mapping[s]) {
      return false;
    }
  }
  console.log(stack);
  return stack.length === 0;
};

console.log(isValidParentheses("({[]}})"));
