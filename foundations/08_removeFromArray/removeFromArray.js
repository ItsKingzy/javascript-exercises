const removeFromArray = function(arr, ...extras) {
    /*
    This solution took me a lot of thinking, but 
    we can filter the list, and if the list has 
    some element inside the "extras" array (which 
    represents and array of all optional 
    arguments), then filter it out.
    */
    return arr.filter((item) => !extras.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
