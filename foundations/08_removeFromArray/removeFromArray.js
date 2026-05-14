const removeFromArray = function(arr, ...del) {
    for (let i = arr.length - 1; i >= 0; i--) {
    for (let arg = del.length; arg >= 0; arg--) {
        let j = arr[i];
        let k = del[arg];
        if (k === j) {
            arr.splice((j - 1), 1);
        } else continue;
    }
}
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
