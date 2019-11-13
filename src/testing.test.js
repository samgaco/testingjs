const mycapitalize = require('./mycapitalize');
const myreverse = require('./myreverse');


test('My capitalize gets a string and returs the same string with the first letter in uppercase', () =>{
    expect(mycapitalize('hello')).toBe('Hello');
});

test('My reverse takes a string and returns its reverse', () =>{
    expect(myreverse('hello')).toBe('olleh');
});