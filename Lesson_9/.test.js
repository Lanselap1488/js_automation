const Calculator = require('./calc');
const getUsers = require('./requests');

describe('Tests for simple calculator', () => {
  test('Plussing of nums without function', () => {
    expect(1 + 2).toBe(3);
  });
});

test('plus', () => {
  const calc = new Calculator(5, 2);
  expect(calc.simpleCalc('+')).toBe(7);
});
test('minus', () => {
  const calc = new Calculator(10, 2);
  expect(calc.simpleCalc('-')).toBe(8);
});
test('multiplication', () => {
  const calc = new Calculator(5, 10);
  expect(calc.simpleCalc('*')).toBe(50);
});
test('division', () => {
  const calc = new Calculator(100, 2);
  expect(calc.simpleCalc('/')).toBe(50);
});

describe('Tests for async calculator', () => {
  test('async plys', async () => {
    const calc = new Calculator(1, 5);
    const res = await calc.asyCalc('+');
    expect(res).toBe(6);
  });
});
test('async minus', async () => {
  const calc = new Calculator(6, 2);
  const res = await calc.asyCalc('-');
  expect(res).toBe(4);
});
test('multiplication', async () => {
  const calc = new Calculator(6, 2);
  const res = await calc.asyCalc('*');
  expect(res).toBe(12);
});
test('division', async () => {
  const calc = new Calculator(12, 2);
  const res = await calc.asyCalc('/');
  expect(res).toBe(6);
});

test('request', async  () => {
  const resp = await getUsers(1)
  expect(resp.data).toMatchObject({email:'george.bluth@reqres.in'})
});