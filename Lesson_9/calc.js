function simpleCalc(num1, num2, value) {
  switch (value) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'The value has not selected';
  }
}

module.exports = simpleCalc;
