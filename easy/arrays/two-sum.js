// const numbers = [2,7,11,15];
const numbers = [3, 2, 4];
const target = 6;
// const numbers = [3,2,3];
// const target = 6;

// function twoSum(n, t) {
//   const hashtable = {};
//   for(let i = 0; i < n.length; i++) {
//     const diff = t - n[i];
//     if(hashtable.hasOwnProperty(diff)) {
//       return [hashtable[diff], i];
//     }
//     hashtable[n[i]] = i;
//   }
//   return null;
// }

// function twoSum(n, t) {
//   const hashtable = new Map();
//   for(let i = 0; i < n.length; i++) {
//     const diff = t - n[i];
//     if(hashtable.has(diff)) {
//       return [hashtable.get(diff), i];
//     }
//     hashtable.set(n[i], i);
//   }
//   return null;
// }

// function twoSum(n, t) {
//   const hashtable = new Map();
//   for(let i = 0; i < n.length; i++) {
//     const diff = t - n[i];
//     if(hashtable.has(diff)) {
//       return [hashtable.get(diff), i];
//     }
//     hashtable.set(n[i], i);
//   }
//   return null;
// }

// function twoSum(n, t) {
//   const hashtable = new Map();

//   for(let i = 0; i < n.length; i++) {
//     const diff = t - n[i];
//     if(hashtable.has(diff)) {
//       return [hashtable.get(diff), i];
//     }
//     hashtable.set(n[i], i);
//   }
//   return null;
// }

// function twoSum(n, t) {
//   const hashtable = new Map();

//   for(let i = 0; i < n.length; i++) {
//     const diff = t - n[i];
//     if(hashtable.has(diff)) {
//       return [hashtable.get(diff), i];
//     }
//     hashtable.set(n[i], i);
//   }
//   return null;
// }

// function twoSum(n, t) {
//   const hashtable = new Map();

//   for(let i = 0; i < n.length; i++) {
//     const diff = t - n[i];
//     if(hashtable.has(diff)) {
//       return [hashtable.get(diff), i];
//     }
//     hashtable.set(n[i], i);
//   }
//   return null;
// }

// coding interview sample

// function twoSum(numbers) {
//   for(let i = 0; i < numbers.length; i++) {
//     for(let j = 1; j < numbers.length; j++) {
//       if(numbers[i] + numbers[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// const twoSum = function(n, t) {
//   const hashmap = new Map();
//   for(let i = 0; i < n.length; i++) {
//     let diff = t - n[i];
//     if(hashmap.has(diff)) {
//       return [hashmap.get(diff), i];
//     }
//     hashmap.set(n[i], i);
//   }
//   return null;
// }

const twoSum = function(n, t) {
  const hashmap = new Map();
  for(let i = 0; i < n.length; i++) {
    let diff = t - n[i];
    if(hashmap.has(diff)) {
      return [hashmap.get(diff), i];
    }
    hashmap.set(n[i], i);
  }
  return null;
}

// const twoSum = (n, t) => {
//   let i = 0;
//   let j = n.length - 1;
//   let sorted = n.sort((a, b) => a - b);
//   console.log('sorted', sorted);
//
//   while(i < j) {
//     let sum = sorted[i] + sorted[j];
//     console.log('sum', sum);
//     if(sum === t) {
//       return [i, j];
//     } else if(sum > t) {
//       j--;
//     } else {
//       i++;
//     }
//   }
//   return null;
// }

// const twoSum = (n, t) => {
//   const hashmap = new Map();

//   for(let i = 0; i < n.length; i++) {
//     let diff = t - n[i];
//     console.log('diff', diff);
//     console.log('hashmap', hashmap);
//     if(hashmap.has(diff)) {
//       return [hashmap.get(diff), i];
//     }

//     hashmap.set(n[i], i);
//   }
//   return null;
// }

console.log('two sum', twoSum(numbers, target));
