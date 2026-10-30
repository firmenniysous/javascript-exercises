const fibonacci = function(num) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    if (num <= 0 || isNaN(num)) {
        return "OOPS";
    }
    return b;
};
console.log(fibonacci(NaN));

// Do not edit below this line
module.exports = fibonacci;
