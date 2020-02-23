const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

//not
test('Addds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('should be null', () => {
    expect(functions.isNull()).toBeNull();
})

// toBe Falsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
})


// toEqual
test('User should be Brad Traversy object', () => {
    // Testing object requires "toEqual", not "toBe"
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
})

//Regex
test('There is no I in team', () => {
    // //i means case insensitive =>
    // Whether a letter is capital or small isn't matter
    expect('team').not.toMatch(/I/i);
})

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// Working with async data

// Promise
test('User fetched name should be Leanne Graham', () => {
    // expect.assertions verifies that
    // a specified number of assertions are called
    // use it to check callback or Promise in async code get called
    expect.assertions(1);
    return functions.fetchUser()
      .then(data => {
          expect(data.name).toEqual('Leanne Graham');
      });
});


// Async Await
test('User fetched name should be Leanne Graham', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});