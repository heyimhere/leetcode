const h = [0, 1, 2, 3, 4];
const t = 2;
const numberOfEmployeesWhoMetTarget = function(hours, target) {
  let ans = 0;
  for(let i = 0; i < hours.length; i++) {
    if(hours[i] >= target) {
      ans++;
    }
  }
  return ans;
};

console.log('met target', numberOfEmployeesWhoMetTarget(h, t));
