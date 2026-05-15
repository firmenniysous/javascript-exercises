const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    if (a < 0 || b < 0) return 'ERROR';
    if (Number.isNaN(a) || Number.isNaN(b)) return 'ERROR';
    let arr = [a, b];
    arr.sort(() => b - a);
    let firstIndex = arr[0];
    let lastIndex = arr[arr.length - 1];
    for (let i = lastIndex - 1; i > firstIndex; i--) {
        arr.push(i);
    }
    let sum = arr.reduce((x, y) => x + y, 0);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
