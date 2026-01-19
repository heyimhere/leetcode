const m = [1, 4, 3, 8, 5];

const findPeaks = function(mountain) {
  let pointer = 0;
  let ans = [];
  for(let i = 1; i < mountain.length - 1; i++) {
    if(mountain[i] > mountain[pointer] && mountain[i] > mountain[i + 1]) {
      ans.push(i);
    }
    pointer++;
  }
  return ans;
};

console.log('find the peaks', findPeaks(m));
