const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a * b;
};

const divide = function(a, b){
    return a / b;
};

const modulus = function(a, b){
    return a % b;
};

const even = function(a) {
    // return a % 2 === 0;  --- original
    // return modulus(a, 2) === 0;  // refactored using modulus
    return !modulus(a, 2);  // refactored again and can chnge in tests
};

const odd = function(a){
    // return a % 2 !== 0;  ---- original
    // return modulus(a, 2) !== 0; // refactored using modulus
    return modulus(a, 2) // refactored again and can change in tests
};

console.log(odd(6));

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
