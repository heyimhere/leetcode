const array = [3,0,1,1,9,7];
const n1 = 7;
const n2 = 2;
const n3 = 3;

const countGoodTriplets = function(arr, a, b, c) {
  let count = 0;
  for(let i = 0; i < arr.length - 2; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      for(let k = j + 1; k < arr.length; k++) {
        if(Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
          count++
        }
      }
    }
  }
  return count;
};

console.log('counting good triplets', countGoodTriplets(array, n1, n2, n3));
