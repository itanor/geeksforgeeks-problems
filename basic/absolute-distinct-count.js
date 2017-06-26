function assert(value, desc) {
  value ? console.log(`%c ${desc} PASS!`, 'color: green') 
        : console.log(`%c ${desc} FAIL!`, 'color: red');
}

Array.prototype.toAbsolute = function() {
  for(var i = 0, len = this.length; i < len; i++) {
    this[i] = Math.abs(this[i]);
  }
  return this;
}
Array.prototype.distinctCount = function() {
  var distinctCount = 0;
  for(var i = 0, len = this.length; i < len; i++) {
    if(this[i] != this[i+1]) distinctCount++;
  }
  return distinctCount;
}

function absoluteDistinctCount(array) {
  return array
    .toAbsolute()
    .sort(function(a,b) {return a > b;})
    .distinctCount();
}

assert(absoluteDistinctCount([].sort()) == 0, "");
assert(absoluteDistinctCount([-10]) == 1, "");
assert(absoluteDistinctCount([-10, 10]) == 1, "");
assert(absoluteDistinctCount([10, -10]) == 1, "");
assert(absoluteDistinctCount([10, -100]) == 2, "");
assert(absoluteDistinctCount([-10, 0, -100, 2, -5, 10, 3, 100]) == 6, "");

