const leapYears = function(year) {
    // Divisible by 4 and not by 100 or divisible by just 400
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
