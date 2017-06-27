function assertEqualArrays(array1, array2, desc) {
  var value = array1.length == array2.length && array1.every(function(n, i) {return n === array2[i]});

  value ? console.log(`%c ${desc} PASS!`, 'color: green') 
        : console.log(`%c ${desc} FAIL!`, 'color: red');
}

Array.prototype.removeDuplicates = function() {
  for(var i = 0, len = this.length; i < len; i++) {
    this[i] != undefined && this.remove(i);
  }
  return this.filter(function(n) {return n;});
}
Array.prototype.remove = function(index) {
  for(var i = index, len = this.length; i < len; i++) {
    if(this[index] == this[i+1] && i+1 < len) this[i+1] = undefined;
  }
}

function removeDuplicatesFromUnsortedArray(array) {
  return array.removeDuplicates();
}

assertEqualArrays(removeDuplicatesFromUnsortedArray([1, 2, 3, 1, 4, 2]), [1, 2, 3, 4], "");
assertEqualArrays(removeDuplicatesFromUnsortedArray([1, 2, 1, 3, 6, 9]), [1, 2, 3, 6, 9], "");
assertEqualArrays(removeDuplicatesFromUnsortedArray([2, 2, 3, 4, 5, 4]), [2, 3, 4, 5], "");
assertEqualArrays(removeDuplicatesFromUnsortedArray([8, 3, 5, 1, 1, 3, 9]), [8, 3, 5, 1, 9], "");
assertEqualArrays(removeDuplicatesFromUnsortedArray([89]), [89], "");
assertEqualArrays(removeDuplicatesFromUnsortedArray([5, 5, 1, 9, 5]), [5, 1, 9], "");
assertEqualArrays(removeDuplicatesFromUnsortedArray([11, 9, 11]), [11, 9], "");
assertEqualArrays(removeDuplicatesFromUnsortedArray([]), [], "");

