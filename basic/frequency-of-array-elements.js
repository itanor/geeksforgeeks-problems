/*
 * Given an unsorted array of N integers which can contain integers from 
 * 1 to N. Some elements can be repeated multiple times and some other 
 * elements can be absent from the array. Count frequency of all elements from 
 * 1 to N.
 */

function assertEqualArrays(array1, array2, desc) {
  var value = array1.length == array2.length && array1.every(function(n, i) {return n === array2[i]});

  value ? console.log(`%c ${desc} PASS!`, 'color: green') 
        : console.log(`%c ${desc} FAIL!`, 'color: red');
}

function notIn(value, already) {
  for(var x = 0; x < already.length; x++) {
    if(value == already[x]) return false;
  }
  return true;
}

function frequencyOfArrayElements(array) {
  var responses = [], already = [];

  for(var r = 0; r < array.length; r++) responses.push(0);

  for(var i = 0, len = array.length; i < len; i++) {
    for(var j = i; j < len; j++) {
      if(array[i] == array[j] && notIn(array[i], already)) {
        responses[array[i]-1] += 1;
      }
    }
    already.push(array[i]);
  }
  return responses;
}

assertEqualArrays(frequencyOfArrayElements([2,3,2,3,5]), [0,2,2,0,1], "");
assertEqualArrays(frequencyOfArrayElements([3,3,3,3]), [0,0,4,0], "");
assertEqualArrays(frequencyOfArrayElements([1,1,3,2]), [2,1,1,0], "");

