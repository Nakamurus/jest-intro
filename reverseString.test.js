const reverseString = require('./reverseString');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String reversed', () => {
    expect(reverseString('hello')).toEqual('olleh');
})