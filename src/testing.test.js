const mycapitalize = require('./mycapitalize');

test('blabla', () =>{
    expect(mycapitalize('hello')).toBe('Hello');
});