const n1 = [4, 3, 2, 3, 1];
const n2 = [2, 2, 5, 2, 3, 6];

const findIntersectionValues = function(nums1, nums2) {
  // code here
  let hashmap = {};
  let ans = [];

  for(let i = 0; i < nums1.length; i++) {
    if(!(nums1[i] in hashmap)) {
      hashmap[nums1[i]] = true;
    }
  }

  let hashmap2 = {};
  for(let k = 0; k < nums2.length; k++) {
    if(!(nums2[k] in hashmap2)) {
      hashmap2[nums2[k]] = true;
    }
  }

  let sum1 = 0;
  for(let a = 0; a < nums1.length; a++) {
    if(nums1[a] in hashmap2) {
      sum1 += 1;
    }
  }

  let sum2 = 0;
  for(let j = 0; j < nums2.length; j++) {
    if(nums2[j] in hashmap) {
      sum2 += 1;
    }
  }

  ans.push(sum1);
  ans.push(sum2);
  return ans;
};

console.log('find intersection values', findIntersectionValues(n1, n2));
