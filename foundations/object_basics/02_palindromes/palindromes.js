const palindromes = function (phrase) {
    let connectedPhrase = phrase.split(/[! -,.]+/).join('').toLowerCase();
    return connectedPhrase.split('').reverse().join('') === connectedPhrase ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
