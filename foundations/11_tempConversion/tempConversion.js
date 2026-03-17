// F -> C
const convertToCelsius = function(num) {
  // N.B., Math.round(# * 10)/10, returns a float to 1 decimal place
  return Math.round(((num - 32) * (5/9)) * 10) / 10
};

// C -> F
const convertToFahrenheit = function(num) {
  // N.B., Math.round(# * 10)/10, returns a float to 1 decimal place
  return Math.round(((num * (9/5)) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
