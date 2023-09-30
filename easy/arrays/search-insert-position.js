let n = [1, 3, 5, 6];
let t = 7;

function binarySearch(array, target, start, end) {
  if(start > end) return start;

  const midPoint = Math.floor((start + end) / 2);

  if(array[midPoint] === target) return midPoint;

  if(array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);

  if(array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}
function searchInsert(nums, target) {
  // code here
  const results = binarySearch(nums, target, 0, nums.length - 1);
  console.log('results', results);
  return results;
}

console.log('search insert', searchInsert(n, t));
