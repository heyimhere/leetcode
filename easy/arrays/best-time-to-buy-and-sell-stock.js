const p = [7, 1, 5, 3, 6, 4];
// coding interview sample

// practice 1
function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let max = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let sub = prices[right] - prices[left];
      max = Math.max(max, sub);
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

// practice 2
function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let max = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let sub = prices[right] - prices[left];
      max = Math.max(max, sub);
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

// practice 3
function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let sub = prices[right] - prices[left];
      max = Math.max(max, sub);
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

// practice 4
function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let sub = prices[right] - prices[left];
      max = Math.max(max, sub);
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

// practice 5
function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let sub = prices[right] - prices[left];
      max = Math.max(max, sub);
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

// practice 6
function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let sub = prices[right] - prices[left];
      max = Math.max(max, sub);
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

// practice 7
function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let sub = prices[right] - prices[left];
      max = prices[right] - prices[left];
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

// practice 8
function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let sub = prices[right] - prices[left];
      max = Math.max(max, sub);
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

// practice 9
function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let sub = prices[right] - prices[left];
      max = Math.max(max, sub);
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

// practice 10
function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let sub = prices[right] - prices[left];
      max = Math.max(max, sub);
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

// function maxProfit(prices) {
//   let max = 0;
//   for(let i = 0; i < prices.length; i++) {
//     for(let j = 1; j < prices.length; j++) {
//       if(prices[i] < prices[j]) {
//         max = Math.max(max, prices[j] - prices[i]);
//       }
//     }
//   }
//   return max;
// }

function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let sub = prices[right] - prices[left];
      max = Math.max(max, sub);
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let diff = prices[right] - prices[left];
      max = Math.max(max, diff);
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

console.log("max profit", maxProfit(p));
