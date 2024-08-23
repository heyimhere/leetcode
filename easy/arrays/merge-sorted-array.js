const numbersOne = [1,2,3,0,0,0];
const numbersTwo = [2,5,6];
const countOne = 3;
const countTwo = 3;
function merge(nums1, m, nums2, n) {
  // for some reason this doesnt work on leetcode.
  // Might be the guidelines of not messing with the first arrays length :/
  // nums1 = nums1.filter(val => val !== 0);
  // nums2 = nums2.filter(val => val !== 0);
  // nums1 = [...nums1, ...nums2].sort();
  // console.log('test', nums1);
  for(let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
  return nums1;
}

// coding interview sample

console.log('merge', merge(numbersOne, countOne, numbersTwo, countTwo));
