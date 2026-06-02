// TODO: implement
// LC #412 — Fizz Buzz
//
// Given an integer n, return an array `answer` of length n where:
//   answer[i] = "FizzBuzz" if (i+1) is divisible by 15
//   answer[i] = "Fizz"     if (i+1) is divisible by 3
//   answer[i] = "Buzz"     if (i+1) is divisible by 5
//   answer[i] = String(i+1) otherwise
//
// Example:
//   n = 5  → ["1","2","Fizz","4","Buzz"]
//   n = 15 → ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
//
// Approach (loop with divisibility checks):
//   out = []
//   for i in 1..n:
//     by3 = i % 3 === 0
//     by5 = i % 5 === 0
//     out.push(by3 && by5 ? "FizzBuzz" : by3 ? "Fizz" : by5 ? "Buzz" : String(i))
//   return out
//
// Why check 15 = 3 && 5 (not "i % 15"):
//   Functionally equivalent, but using booleans for 3 and 5 separately lets
//   you compose the "FizzBuzz" string by concatenation if you wanted —
//   easier to extend (e.g. "Fizz" at 3, "Buzz" at 5, "Bazz" at 7).
//
// Time:  O(n)
// Space: O(n) for the output
//
// Edge Cases:
//   - n = 0      → []
//   - n = 1      → ["1"]
//   - n = 3      → ["1","2","Fizz"]
//   - Very large n → still linear; no overflow in JS numbers up to 2^53

/**
 * @param {number} n
 * @returns {string[]}
 */
const fizzBuzz = (n) => {
  // your code here
};

console.log('=== LC #412 Fizz Buzz ===\n');

console.log('Test 1 — n=5:');
console.log(fizzBuzz(5));
// Expected: ["1","2","Fizz","4","Buzz"]

console.log('\nTest 2 — n=15:');
console.log(fizzBuzz(15));
// Expected: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

console.log('\nTest 3 — n=0:');
console.log(fizzBuzz(0));
// Expected: []

console.log('\nTest 4 — n=1:');
console.log(fizzBuzz(1));
// Expected: ["1"]
