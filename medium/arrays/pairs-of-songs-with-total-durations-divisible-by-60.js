const t = [30,20,150,100,40];
// const t = [60,60,60];
// function numPairsDivisibleBy60(time) {
//   // code here
//   let pairs = 0;
//   for(let i = 0; i < time.length; i++) {
//    for(let j = i + 1; j < time.length; j++) {
//     if((time[i] + time[j]) % 60 === 0) {
//       console.log('time[i]', time[i], 'time[j]', time[j]);
//       pairs++;
//     }
//    } 
//   }
//   console.log('pairs', pairs);
//   return pairs;
// }

// function numPairsDivisibleBy60(time) {
//   // code here
//   let hashmap = new Array(60).fill(0);
//   let count = 0;
//   for(let i = 0; i < time.length; i++) {
//     let val = time[i] % 60;
//     count += hashmap[(60 - val) % 60];
//     hashmap[val] += 1;
//   }
//   return count;
// }

// I like this approach better.
function numPairsDivisibleBy60(time) {
  // code here
  let count = 0;
  let hashmap = {};

  for(let currTime of time) {
    const remainder = currTime % 60;
    const diff = (60 - remainder) % 60;
    count += hashmap[diff] ? hashmap[diff] : 0;
    hashmap[remainder] = hashmap[remainder] ? hashmap[remainder] += 1 : 1;
  }
  return count;
}

console.log('number of divisible pairs by 60', numPairsDivisibleBy60(t));