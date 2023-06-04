const Calculator = require('./calc');


describe('Tests for calculator', () => {
  test('Plussing of nums', () => {
    expect(1 + 2).toBe(3);
  });
});

test('subtraction', () => {
    const calculator = new Calculator(5, 2, '-');
    expect(calculator.simpleCalc()).toBe(3);
  });