class Caclulator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  simpleCalc(value) {
    switch (value) {
      case '+':
        return this.num1 + this.num2;
      case '-':
        return this.num1 - this.num2;
      case '*':
        return this.num1 * this.num2;
      case '/':
        return this.num1 / this.num2;
      default:
        return 'The value has not selected';
    }
  }

  async asyCalc(value) {
    if (value === '+') {
      const result = new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.num1 + this.num2);
        }, 1000);
      });
      return result;
    }
    if (value === '-') {
      const result = new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.num1 - this.num2);
        }, 1000);
      });
      return result;
    }
    if (value === '*') {
      const result = new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.num1 * this.num2);
        }, 2000);
      });
      return result;
    }
    if (value === '/') {
      const result = new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.num1 / this.num2);
        }, 2000);
      });
      return result;
    }
    return 'The value has not selected';
  }
}

const cacl = new Caclulator(1, 2);
console.log(cacl.asyCalc('+'));

module.exports = Caclulator;
