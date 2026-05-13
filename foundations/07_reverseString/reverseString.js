const reverseString = function(word) {
    let arr = word.split("");
    let reversedArray = arr.reverse();
    let newWord = reversedArray.join("");
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
