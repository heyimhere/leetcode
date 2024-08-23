const t = [30,20,150,100,40];

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
// function numPairsDivisibleBy60(time) {
//   let count = 0;
//   let hashmap = {};

//   for(let currTime of time) {
//     const remainder = currTime % 60;
//     const diff = (60 - remainder) % 60;
//     count += hashmap[diff] ? hashmap[diff] : 0;
//     hashmap[remainder] = hashmap[remainder] ? hashmap[remainder] += 1 : 1;
//   }
//   return count;
// }

// practice 1
function numPairsDivisibleBy60(time) {
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

// practice 2
function numPairsDivisibleBy60(time) {
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

// practice 3
function numPairsDivisibleBy60(time) {
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

// practice 4
function numPairsDivisibleBy60(time) {
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

// practice 5
function numPairsDivisibleBy60(time) {
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

// practice 6
function numPairsDivisibleBy60(time) {
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

// practice 7
function numPairsDivisibleBy60(time) {
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

// practice 8
function numPairsDivisibleBy60(time) {
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

// practice 9
function numPairsDivisibleBy60(time) {
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

// practice 10
function numPairsDivisibleBy60(time) {
  let count = 0;
  let hashmap = {};

  for(let currTime of time) {
    const remainder = currTime % 60;
    const diff = (60 - remainder) % 60;

    count += hashmap[diff] ? hashmap[diff] : 0;
    hashmap[remainder] = hashmap[remainder] ? hashmap[remainder] += 1 : 1
  }
  return count;
}

// practice 11
function numPairsDivisibleBy60(time) {
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

// practice 12
function numPairsDivisibleBy60(time) {
  let count = 0;
  let hashmap = {};

  for(let currTime of time) {
    const remainder = currTime - 60;
    const diff = (60 - remainder) % 60;

    count += hashmap[diff] ? hashmap[diff] : 0;
    hashmap[remainder] = hashmap[remainder] ? hashmap[remainder] += 1 : 1;
  }
  return count;
}

// coding interview sample

console.log('number of divisible pairs by 60', numPairsDivisibleBy60(t));
