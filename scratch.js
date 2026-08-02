const maxSlidingWindow = (nums, k) => {
  const dq = [];
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (dq.length && dq[0] <= i - k) {
      dq.shift();
    }

    while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) {
      dq.pop();
    }

    dq.push(i);

    if (i >= k - 1) {
      res.push(nums[dq[0]]);
    }
  }

  return res;
}

console.log('[1,3,-1,-3,5,3,6,7], k=3 ->', maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
console.log('[1], k=1                 ->', maxSlidingWindow([1], 1));        // [1]
console.log('[9,11], k=2              ->', maxSlidingWindow([9, 11], 2));    // [11]
console.log('[4,-2], k=2              ->', maxSlidingWindow([4, -2], 2));    // [4]
