// Given an array of integers which may or may not contain duplicate elements. 
// Your task is to print the array after removing duplicate elements, if present.

function assert(value, desc) {
    value ? console.log(`%c ${desc} PASS!`, 'color: green')
          : console.log(`%c ${desc} FAIL!`, 'color: red');
}

Array.prototype.removeDuplicates = function() {
  var newArray = [], pivot, next = 1;
  for(var i = 0, len = this.length; i < len; i++) {
    pivot = this[i];

    if(pivot == null) {
      next++;
      continue;
    }
    for(var j = next; j < len; j++) {
      if(pivot == this[j]) {
        this[j] = null;
      }
    }
    next++;
  }
  return this;
}
Array.prototype.newArray = function() {
  var newArray = [];
  for(var i = 0; i < this.length; i++) {
    if(this[i] != null) newArray.push(this[i]);
  }
  return newArray;
}

function remove(array) {
  return array
         .removeDuplicates()
         .newArray();
}

assert(remove([]).length == 0, "");
assert(remove([1,1,2,3,2]).length == 3, "");
assert(remove([2,1,1,2,3]).length == 3, "");
assert(remove([1,0,2,3]).length == 4, "");
assert(remove([1,1,2,3,2,1]).length == 3, "");

