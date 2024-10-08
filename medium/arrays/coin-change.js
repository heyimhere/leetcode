const c = [1, 2, 5];
const a = 11;

// DP bottom up tabulation
const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
};

// DP bottom up tabulation
// practice 1
const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

// DP bottom up tabulation
// practice 2
const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

// DP bottom up tabulation
// practice 3
const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

// DP bottom up tabulation
// practice 4
const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

// DP bottom up tabulation
// practice 5
const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

// DP bottom up approach
// practice 6
const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

// DP bottom up approach
// practice 7
const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

// DP bottom up approach tabulation
// practice 8
const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

// DP bottom up approach tabulation
// practice 9
const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

// DP bottom up approach tabulation
// practice 9
const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

// DP bottom up approach tabulation
// practice 10
const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

const coinChange = function(coins, amount) {
	let dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}

const coinChange = function(coins, amount) {
	let dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infintiy ? -1 : dp[amount];
}

const coinChange = function(coins, amount) {
	const dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for(let i = 1; i < dp.length; i++) {
		for(let coin of coins) {
			if(i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
}




















// DP top down memoization
// const coinChange = function(coins, amount) {
// 	const memo = new Map();

// 	function permute(left) {
// 		if(memo.has(left)) {
// 			return memo.get(left);
// 		}
// 		if(left === 0) {
// 			return 0;
// 		}
// 		let min = Infinity;
		
// 		for(let coin of coins) {
// 			if(left - coin >= 0) {
// 				min = Math.min(min, permute(left - coin));
// 			}
// 		}

// 		memo.set(left, min + 1);

// 		return min + 1;
// 	}

// 	const result = permute(amount);
// 	return result === Infinity ? -1 : result;
// }

// coding interview sample 

console.log('coin change', coinChange(c, a));
