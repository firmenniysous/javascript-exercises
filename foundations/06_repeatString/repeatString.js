const repeatString = function(string, num) {
        let repeated = string;
        if (num < 0) {
            return 'ERROR!'
        } else { 
            for (let i = 1; i < num; i++) {
             repeated += string;
        }
        return repeated;
    }
}
;


// Do not edit below this line
module.exports = repeatString;
