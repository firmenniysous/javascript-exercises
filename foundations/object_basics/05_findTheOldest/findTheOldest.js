const findTheOldest = function(arr) {
    for (let item of arr) {
        if (!item.yearOfDeath) {
            item.yearOfDeath = 2026;
        }
    }
    let theOldest = arr.reduce((max, item) => item.yearOfDeath - item.yearOfBirth > max.yearOfDeath - max.yearOfBirth ? item : max);
    return theOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
