const can = [2, 3, 5, 1, 3];
const ext = 3;

const kidsWithCandies = function(candies, extraCandies) {
  let max = 0;
  for(let i = 0; i < candies.length; i++) {
    max = Math.max(max, candies[i]);
  };

  let ans = [];
  for(let j = 0; j < candies.length; j++) {
    let sum = candies[j] + extraCandies;
    if(sum >= max) {
      ans.push(true);
    } else {
      ans.push(false);
    }
  };
  return ans;
};

console.log('kids with candies', kidsWithCandies(can, ext));
