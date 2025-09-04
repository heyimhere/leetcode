
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 49];

// const onlyPrimes = (number) => {
//   if(number <= 1) return false;
//   if(number === 2) return true;
//   if(number % 2 === 0) return false;
//   for(let i = 3; i <= Math.sqrt(number); i += 2) {
//     if(number % i === 0) return false;
//   }
//   return true;
// }

// const findPrimes = (n) => {
//   return n.filter(each => onlyPrimes(each));
// }

const onlyPrimes = (number) => {
  if(number <= 1) return false;
  if(number === 2) return true;
  if(number % 2 === 0) return false;
  for(let i = 3; i <= Math.sqrt(number); i += 2) {
    if(number % i === 0) return false;
  }
  return true;
}

const findPrimes = (n) => {
  return n.filter(each => onlyPrimes(each));
}

console.log('primes', findPrimes(nums));
