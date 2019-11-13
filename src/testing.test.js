const mycapitalize = require('./mycapitalize');
const myreverse = require('./myreverse');
const calculator = require('./calculator')


test('My capitalize gets a string and returs the same string with the first letter in uppercase', () =>{
    expect(mycapitalize('hello')).toBe('Hello');
});

test('My reverse takes a string and returns its reverse', () =>{
    expect(myreverse('hello')).toBe('olleh');
});

test('calculator can sum numbers', () =>{
    expect(calculator.addition(1,2)).toBe(3);
});

test('calculator can substract a number from another', () =>{
    expect(calculator.substraction(1,2)).toBe(-1);
});

test('calculator can multiply numbers', () =>{
    expect(calculator.multiply(1,2)).toBe(2);
});

test('calculator can get a fraction', () =>{
    expect(calculator.fraction(1,2)).toBe(0.5);
});