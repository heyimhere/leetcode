// const numbers = [2,7,11,15];
const numbers = [3, 2, 4];
const target = 6;

// const twoSum = (n, t) => {
//   for(let i = 0; i < n.length; i++) {
//     for(let j = i + 1; j < n.length; j++) {
//       if(n[i] + n[j] === t) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }

const twoSum = (n, t) => {
  const seen = new Map();
  for(let i = 0; i < n.length; i++) {
    const diff = t - n[i];
    if(seen.has(diff)) {
      return [seen.get(diff), i];
    }
    seen.set(n[i], i);
  }
  return null;
}

console.log('two sum', twoSum(numbers, target));
