const num = 4;
const fib = function(n, memo) {
	memo = memo || {};
	if(memo[n]) {
		return memo[n];
	}
	if(n <= 1) {
		return n;
	}
	return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
}

console.log('fibonacci', fib(num));
