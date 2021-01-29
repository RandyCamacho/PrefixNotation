/**
 * Randy Camacho
 *
 * IQ Lab
 *
 * @param {string}  expression prefix expression with valid input
 */

function evalPrefix(expression) {
  let expr = expression.split(" ");
  let str = expr.reverse();
  let stack = [];

  for (i = 0; i < str.length; i++) {
    if (str.length === 1 && !isNaN(str[0])) {
      return str[0];
    }

    if (!isNaN(str[i])) {
      stack.push(str[i]);
    } else {
      let num1 = stack.pop();
      let num2 = stack.pop();

      switch (str[i]) {
        case "+":
          stack.push(parseInt(num1) + parseInt(num2));
          break;
        case "-":
          stack.push(parseInt(num1) - parseInt(num2));
          break;
        case "*":
          stack.push(parseInt(num1) * parseInt(num2));
          break;
        case "/":
          stack.push(parseInt(num1) / parseInt(num2));
          break;
      }
    }
  }
  return stack[0];
}

console.log(evalPrefix("9")); //9
console.log(evalPrefix("+ 1 2")); //3
console.log(evalPrefix("+ + 1 2 30")); //33
console.log(evalPrefix("+ + 12 16 * 10 4")); //68
