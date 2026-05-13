function repeatString(string, num) {
    let repeated = '';
    if (num < 0) {return 'ERROR!'} else {
        for (let i = 0; i < num; i++) {
            repeated += string;
        }
    }
    return repeated;
}

console.log(repeatString('hey', -4))