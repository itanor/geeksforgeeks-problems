// Given an sorted array of size n. 
// Find number of elements which are less than or equal to given element.

function assert(value, desc) {
    value ? console.log(`%c ${desc} PASS!`, 'color: green') 
          : console.log(`%c ${desc} FAIL!`, 'color: red');
}

Array.prototype.countOfSmallerElementsOf = function(element) {
    var count = 0;
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] <= element) count++;
    }
    return count;
}

function count(array) {
    return array
          .sort(function(a,b) {return a > b;})
          .countOfSmallerElementsOf(5);
}

assert(count([]) == 0, "");
assert(count([1]) == 1, "");
assert(count([1,6]) == 1, "");
assert(count([1,5]) == 2, "");
assert(count([-11]) == 1, "");
assert(count([1,5,5]) == 3, "");
assert(count([1,5,5,6]) == 3, "");

