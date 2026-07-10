
const productExectSelf = (nums) => {
  const n = nums.length;
  const res = new Array(n);

  res[0] = 1;
  for (let i = 1; i < n; i++) res[i] = res[i - 1] * nums[i - 1];

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }
  return res;
};

console.log('[1,2,3,4]        ->', productExceptSelf([1, 2, 3, 4]));          // [24, 12, 8, 6]
console.log('[-1,1,0,-3,3]    ->', productExceptSelf([-1, 1, 0, -3, 3]));     // [0, 0, 9, 0, 0]
console.log('[2,3]            ->', productExceptSelf([2, 3]));                // [3, 2]
console.log('[0,0,2,3]        ->', productExceptSelf([0, 0, 2, 3]));          // [0, 0, 0, 0]
console.log('[5]              ->', productExceptSelf([5]));                   // [1]  (empty product)

const productExceptSelfTwoArrays = (nums) => {
  const n = nums.length;
  const prefix = new Array(n);
  const suffix = new Array(n);

  prefix[0] = 1;
  for (let i = 1; i < n; i++) prefix[i] = prefix[i - 1] * nums[i - 1];

  suffix[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) suffix[i] = suffix[i + 1] * nums[i + 1];

  const res = new Array(n);
  for (let i = 0; i < n; i++) res[i] = prefix[i] * suffix[i];
  return res;
};
