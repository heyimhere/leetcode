const twoSum = (numbers, target) => {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1];
    if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
  return [];
};

console.log('[2,7,11,15], 9 ->', twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log('[2,3,4],     6 ->', twoSum([2, 3, 4], 6));       // [1,3]
console.log('[-1,0],     -1 ->', twoSum([-1, 0], -1));        // [1,2]
console.log('[1,2,3,4,4,9,56,90], 8 ->', twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8)); // [4,5]
console.log('[5,25,75], 100 ->', twoSum([5, 25, 75], 100));   // [2,3]
