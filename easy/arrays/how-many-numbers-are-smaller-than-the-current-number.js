const n = [8, 1, 2, 2, 3];

const smallerNumbersThanCurrent = function(nums) {
  let hashMap = {};
  for(let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] ? hashMap[nums[i]]++ : hashMap[nums[i]] = 1;
  }

  let ans = [];
  
  for(let j = 0; j < nums.length; j++) {
    let count = 0;
    for(let [key, value] of Object.entries(hashMap)) {
      if(nums[j] > key) {
        count += value;
      }
    }
    ans.push(count);
  }

  return ans;
};

console.log('smaller numbers than current', smallerNumbersThanCurrent(n));
