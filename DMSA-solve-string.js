function evaluateExpression(expression) {
  const stack = [];
  let num = 0;
  let operator = "+";

  for (let i = 0; i <= expression.length; i++) {
    const char = expression[i];

    if (char >= "0" && char <= "9") {
      num = num * 10 + Number(char);
    }

    if ("+-*/".includes(char) || i === expression.length) {
      if (operator === "+") stack.push(num);
      if (operator === "-") stack.push(-num);
      if (operator === "*") stack.push(stack.pop() * num);
      if (operator === "/") stack.push(Math.trunc(stack.pop() / num));

      operator = char;
      num = 0;
    }
  }

  return stack.reduce((sum, n) => sum + n, 0);
}

console.log(evaluateExpression("20-5*2+10/5*3")); // 15
