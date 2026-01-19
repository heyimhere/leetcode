const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 49];

const onlyPrimes = (number) => {
  const isPrime = new Array(number + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= number; i++) {
    if (isPrime[i]) {
      for (let multiples = i * i; multiples <= number; multiples += i) {
        isPrime[multiples] = false;
      }
    }
  }

  return isPrime;
};

const findPrimes = (n) => {
  const max = Math.max(...n);
  const isPrime = onlyPrimes(max);
  return n.filter((each) => isPrime[each]);
};

console.log("primes", findPrimes(nums));

const isPrime = (num) => {
  if (num <= 2) return 0;
  const arePrimes = new Array(num).fill(true);
  arePrimes[0] = false;
  arePrimes[1] = false;

  for (let i = 2; i * i < num; i++) {
    if (arePrimes[i]) {
      for (let multiples = i * i; multiples < num; multiples += i) {
        arePrimes[multiples] = false;
      }
    }
  }

  let count = 0;

  for (let i = 2; i < num; i++) {
    if (arePrimes[i]) count++;
  }

  return count;
};

console.log("is prime", isPrime(10));
