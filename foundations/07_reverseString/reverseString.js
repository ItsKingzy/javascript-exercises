const reverseString = function(string) {
    let charArr = string.split("");
    let reverseArr = [];

    for (let i = 0; i < string.length; i++) {
        reverseArr.unshift(charArr[i]);
    }

    return reverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
