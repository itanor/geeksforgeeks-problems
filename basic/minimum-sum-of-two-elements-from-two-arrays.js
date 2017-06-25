function findMinimumValueInVector(vector, excludedIndex) {
  var index = 0;
  if(excludedIndex == 0) index = 1;
  var minValue = vector[index], indexOfMin = index;
  for(var i = index, len = vector.length; i < len; i++) {
    if(excludedIndex == i) continue;
    if(minValue > vector[i]) {
      minValue = vector[i];
      indexOfMin = i;
    }
  }
  return {
    minValue  : minValue,
    indexOfMin: indexOfMin
  }
}

function assert(value, desc) {
  value ? console.log(`%c ${desc} PASS!`, 'color: green') 
        : console.log(`%c ${desc} FAIL!`, 'color: red');
}

function findMinimumSum(vectorA, vectorB) {
  var minA = findMinimumValueInVector(vectorA);
  var minB = findMinimumValueInVector(vectorB);
  if(minA.minValue != minB.minValue) {
    return minA.minValue + minB.minValue;
  }
  var newMinA = findMinimumValueInVector(vectorA, minA.indexOfMin);
  var newMinB = findMinimumValueInVector(vectorB, minA.indexOfMin);
  if(minA.minValue + newMinB.minValue <= minB.minValue + newMinA.minValue) {
    return minA.minValue + newMinB.minValue;
  }
  return minB.minValue + newMinA.minValue;
}

assert(findMinimumSum([1,2,3,4], [1,5,3,6]) == 3, "");
assert(findMinimumSum([1,2,3,10], [-4,5,3,0]) == -3, "");
assert(findMinimumSum([1,2,3,0], [4,5,3,0]) == 1, "");
assert(findMinimumSum([1,2,3,0], [4,5,3,4]) == 3, "");
assert(findMinimumSum([1,2,3,0], [4,5,3,0]) == 1, "");
assert(findMinimumSum([1,2,3,0], [0,5,3,1]) == 0, "");
assert(findMinimumSum([1,2,3,0], [1,5,3,2]) == 1, "");
assert(findMinimumSum([1,0,3,6], [4,0,3,2]) == 1, "");
assert(findMinimumSum([1,5,0,6], [4,7,0,2]) == 1, "");
assert(findMinimumSum([1,5,4,3,2], [2,1,4,5,3]) == 2, "");
assert(findMinimumSum([1,-5,4,3,2], [2,-5,4,5,3]) == -4, "");
assert(findMinimumSum([1,15,-4,3,2], [2,25,-4,5,3]) == -3, "");
assert(findMinimumSum([1,-1,-4,3,2], [2,25,-4,5,3]) == -5, "");
assert(findMinimumSum([3,2], [5,3]) == 5, "");
assert(findMinimumSum([3], [5]) == 8, "");

