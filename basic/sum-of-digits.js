/* Given an integer N, find sum of all digits of N */

function assert(value, desc) {
  value ? console.log(`%c ${desc} PASS!`, 'color: green') 
        : console.log(`%c ${desc} FAIL!`, 'color: red');
}

function sumOfAllDigitsOf(number) {
  var sum = 0, numberAsString = number.toString();
  for(var i = 0, len = numberAsString.length; i < len; i++) {
    sum += +numberAsString[i];
  }
  return sum;
}

assert(sumOfAllDigitsOf(123) == 6, "");
assert(sumOfAllDigitsOf(45) == 9, "");
assert(sumOfAllDigitsOf(01) == 1, "");
assert(sumOfAllDigitsOf(1234) == 10, "");

