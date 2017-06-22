// count the numbers between 1 to N containing 4 as a digit.

function countBetween1AndNContaining4AsDigit(n) {
  const FOUR = 4;
  if(n < FOUR) return 0;

  var count = 0, next = FOUR;
  while(n >= next) {
    count++;
    next += 10;
  }
  return count;
}

function assert(value, desc) {
  value ? console.log(`%c ${desc} PASS!`, 'color: green') 
        : console.log(`%c ${desc} FAIL!`, 'color: red');
}

assert(countBetween1AndNContaining4AsDigit(-9) == 0,   "Count for -9");
assert(countBetween1AndNContaining4AsDigit(4) == 1,    "Count for 4");
assert(countBetween1AndNContaining4AsDigit(6) == 1,    "Count for 6");
assert(countBetween1AndNContaining4AsDigit(14) == 2,   "Count for 14");
assert(countBetween1AndNContaining4AsDigit(15) == 2,   "Count for 15");
assert(countBetween1AndNContaining4AsDigit(17) == 2,   "Count for 17");
assert(countBetween1AndNContaining4AsDigit(23) == 2,   "Count for 23");
assert(countBetween1AndNContaining4AsDigit(24) == 3,   "Count for 24");
assert(countBetween1AndNContaining4AsDigit(25) == 3,   "Count for 25");
assert(countBetween1AndNContaining4AsDigit(33) == 3,   "Count for 33");
assert(countBetween1AndNContaining4AsDigit(144) == 15, "Count for 144");

