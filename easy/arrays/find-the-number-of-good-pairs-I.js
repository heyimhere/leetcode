const n1 = [1, 2, 4, 12];
const n2 = [2, 4];
const kei = 3;

const numberOfPairs = (nums1, nums2, k) => {
  const kArray = [];
  for(let i = 0; i < nums2.length; i++) {
    kArray.push(nums2[i] * k);
  }

  let total = 0;
  for(let i = 0; i < nums1.length; i++) {
    for(let j = 0; j < kArray.length; j++) {
      if(nums1[i] % kArray[j] === 0) {
        total++;
      }
    }
  }
  return total;
};

console.log('number of good pairs', numberOfPairs(n1, n2, kei));
