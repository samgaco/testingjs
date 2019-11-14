const mycapitalize = require('./mycapitalize');
const myreverse = require('./myreverse');
const calculator = require('./calculator');
const caesar = require('./caesar');
const arrayAnalysis = require('./arrayAnalysis');


test('My capitalize gets a string and returs the same string with the first letter in uppercase', () => {
  expect(mycapitalize('hello')).toBe('Hello');
});

test('My reverse takes a string and returns its reverse', () => {
  expect(myreverse('hello')).toBe('olleh');
});

test('calculator can sum numbers', () => {
  expect(calculator.addition(1, 2)).toBe(3);
});

test('calculator can substract a number from another', () => {
  expect(calculator.substraction(1, 2)).toBe(-1);
});

test('calculator can multiply numbers', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('calculator can get a fraction', () => {
  expect(calculator.fraction(1, 2)).toBe(0.5);
});

test('caesar test wrapping from z to a.', () => {
  expect(caesar('zz', 1)).toBe('aa');
});

test('caesar keeping the same case', () => {
  expect(caesar('zZ', 1)).toBe('aA');
});

test('caesar test punctuation', () => {
  expect(caesar('zZ.,/', 1)).toBe('aA/-0');
});

test('array test avg', () => {
  expect(arrayAnalysis([3, 2, 4, 6, 10]).average).toBe(5);
});

test('array test min', () => {
  expect(arrayAnalysis([3, 2, 4, 6, 10]).min).toBe(2);
});

test('array test max', () => {
  expect(arrayAnalysis([3, 2, 4, 6, 10]).max).toBe(10);
});

test('array test length', () => {
  expect(arrayAnalysis([3, 2, 4, 6, 10]).len).toBe(5);
});
