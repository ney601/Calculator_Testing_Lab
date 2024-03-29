const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 2500000;
    actual = sum(1500000, 1000000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -5;
    actual = sum(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 3;
    actual = sum(3, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two positive numbers', () => {
    expected = 3;
    actual = subtract(5, 2);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -3;
    actual = subtract(-5, -2);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multiply two positive numbers', () => {
    expected = 10;
    actual = multiply(5, 2);
    expect(actual).toBe(expected);
  });

  test('can multiply a positive and a negative number', () => {
    expected = -10;
    actual = multiply(-5, 2);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two positive numbers', () => {
    expected = 3;
    actual = divide(6, 2);
    expect(actual).toBe(expected);
  });

  test('can divide a negative number by a positive number', () => {
    expected = -3;
    actual = divide(-6, 2);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can find modulus of two positive numbers', () => {
    expected = 1;
    actual = modulus(5, 2);
    expect(actual).toBe(expected);
  });

  test('can find modulus of a negative number and a positive number', () => {
    expected = -1;
    actual = modulus(-5, 2);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('can check if a positive number is even', () => {
    expected = true;
    actual = even(4);
    expect(actual).toBe(expected);
  });

  test('can check if a negative number is even', () => {
    expected = true;
    actual = even(-6);
    expect(actual).toBe(expected);
  });

  test('can check if a number is not odd', () => {
    expected = true;
    actual = even(15);
    expect(actual).not.toBe(expected);    // Alternative assertion method
  })

});

describe('odd', () => {

  test('can check if a positive number is odd', () => {
    expected = true;
    actual = odd(3);
    expect(actual).toBe(expected);
  });

  test('can check if a negative number is odd', () => {
    expected = true;
    actual = odd(-5);
    expect(actual).toBe(expected);
  });

  test('can check if a number is not even', () => {
    expected = true;
    actual = odd(12);
    expect(actual).not.toBe(expected);   // Alternative assertion method
  })

});
