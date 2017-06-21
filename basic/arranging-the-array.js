/*
 * Rearrange a given array in-place such that all the negative numbers occurs 
 * before positive numbers.(Maintain the order of all -ve and +ve numbers as 
 * given in the original array).
 */

var v = [9, -6, 1, -1, 4, -8], result = [];

for(var i = 0, len = v.length, j = v.length-1; i < len, j >= 0; i++, j--) {
  if(v[i] >= 0) result.push(v[i]); 
  if(v[j] < 0) result.unshift(v[j]);
}

console.log(result);

