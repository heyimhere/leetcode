// LC #238 — Product of Array Except Self
//
// Given an integer array `nums`, return an array `answer` where `answer[i]` is
// the product of every element of `nums` EXCEPT `nums[i]`. Must run in O(n)
// time. Division is not allowed. The output array does not count against
// extra-space budget in the O(1) follow-up.
//
// Examples:
//   [1, 2, 3, 4]      -> [24, 12, 8, 6]
//   [-1, 1, 0, -3, 3] -> [0, 0, 9, 0, 0]
//   [2, 3]            -> [3, 2]
//
// Intuition:
//   The tempting move is: compute the total product once, then answer[i] =
//   total / nums[i]. That is O(n) but the problem bans division — and for good
//   reason: a single zero in nums makes total zero, and division-by-zero
//   destroys the trick for the one index we actually could recover.
//
//   The real insight: for each index i, the answer is
//     (product of everything LEFT of i) * (product of everything RIGHT of i)
//   Neither side includes nums[i], so we never need to "remove" it via
//   division. If we can compute those two prefix/suffix products in linear
//   time, we're done.
//
//   Prefix products are cumulative from the left; suffix products are
//   cumulative from the right. Each is one pass. Multiply them index-wise for
//   the answer.
//
//   The O(1)-extra-space refinement: we don't need two separate arrays. Use
//   the output array itself as the prefix store on pass one, then walk right
//   to left with a single `right` accumulator, multiplying it into the slot
//   in place. That's the follow-up answer.
//
// Approach (two-pass, O(1) extra space):
//   - res = new Array(n)
//   - Pass 1 (left -> right), build prefix products into res:
//       res[0] = 1                          // nothing to the left of index 0
//       for i in 1..n-1: res[i] = res[i-1] * nums[i-1]
//   - Pass 2 (right -> left), fold in suffix products with a running `right`:
//       right = 1                           // nothing to the right of last index
//       for i in n-1..0:
//         res[i] *= right                   // (prefix so far) * (suffix so far)
//         right *= nums[i]                  // extend suffix leftward
//   - return res
//
// Walkthrough on [1, 2, 3, 4]:
//   After pass 1 (prefix products): [1, 1, 2, 6]
//     res[0]=1, res[1]=1*1, res[2]=1*2, res[3]=2*3
//   Pass 2, right starts at 1:
//     i=3: res[3] = 6*1 = 6,  right = 1*4 = 4
//     i=2: res[2] = 2*4 = 8,  right = 4*3 = 12
//     i=1: res[1] = 1*12 = 12, right = 12*2 = 24
//     i=0: res[0] = 1*24 = 24, right = 24*1 = 24
//   Final: [24, 12, 8, 6] ✓
//
// Alternate approaches:
//   1) Two separate prefix + suffix arrays: same O(n) time but O(n) extra
//      space. Easier to reason about on a whiteboard; the in-place version is
//      the "impress the interviewer" refinement of the same idea.
//   2) Total-product / nums[i]: banned by the problem, and even if allowed it
//      breaks on any zero. If exactly one zero exists, the zero's slot is the
//      only nonzero output (product of the rest); every other slot is 0. A
//      special-case pass can handle this, but it's a workaround, not the
//      intended pattern.
//
// Complexity of the chosen solution:
//   Time:  O(n) — two linear passes over nums, constant work per index.
//   Space: O(1) extra — only the `right` accumulator beyond the output array,
//                        which the problem excludes from the budget.
//
// Why not O(log n) or better? Every output slot depends on every other input,
// so you must touch each input at least once per output. O(n) is the floor.

const productExceptSelf = (nums) => {
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

// ---------------------------------------------------------------------------
// Reference: two-array prefix + suffix version (O(n) extra space)
//
// The "training wheels" version of the same idea. Build the two directions as
// their own arrays, then zip them. Same time complexity, but the intent is
// obvious at a glance — useful for explaining the approach before collapsing
// to the in-place refinement.
// ---------------------------------------------------------------------------
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

console.log('B [1,2,3,4]      ->', productExceptSelfTwoArrays([1, 2, 3, 4]));    // [24, 12, 8, 6]
console.log('B [-1,1,0,-3,3]  ->', productExceptSelfTwoArrays([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]
