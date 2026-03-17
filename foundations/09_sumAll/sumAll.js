const sumAll = function(int1, int2) {
    // Check if the num is an integer
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR";
    // Check if nums are positive
    if (int1 < 0 || int2 < 0) return "ERROR";
    
    
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
