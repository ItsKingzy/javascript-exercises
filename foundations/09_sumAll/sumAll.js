const sumAll = function(int1, int2) {
    let small = int1 < int2 ? int1 : int2;
    let large = small === int1 ? int2 : int1;
    let sum = 0;

    for (let i = small; i <= large; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
