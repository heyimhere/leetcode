const containsDuplicate = (nums) => {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
};

console.log('[1,2,3,1]              ->', containsDuplicate([1, 2, 3, 1])); // true
console.log('[1,2,3,4]              ->', containsDuplicate([1, 2, 3, 4])); // false
console.log('[1,1,1,3,3,4,3,2,4,2] ->', containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
console.log('[]                     ->', containsDuplicate([])); // false
console.log('[7]                    ->', containsDuplicate([7])); // false
