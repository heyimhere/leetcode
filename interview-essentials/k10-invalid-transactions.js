// Karat-style — Invalid Transactions   [Medium]   Pattern: Hashmap / Grouping
//
// You are given transactions as strings of the form "name,time,amount,city",
// where time is in minutes.
//
// A transaction is INVALID if either:
//   1. its amount is strictly greater than 1000, OR
//   2. another transaction exists with the SAME name, a DIFFERENT city, and
//      a time within 60 minutes of it (inclusive).
//
// When rule 2 fires, BOTH transactions are invalid. Return every invalid
// transaction string, in any order, with no duplicates.
//
// Example 1:
//   Input:  ["alice,20,800,mtv","alice,50,100,beijing"]
//   Output: ["alice,20,800,mtv","alice,50,100,beijing"]
//
// Example 2:
//   Input:  ["alice,20,800,mtv","alice,50,1200,mtv"]
//   Output: ["alice,50,1200,mtv"]
//
// Example 3:
//   Input:  ["alice,20,800,mtv","bob,50,1200,mtv"]
//   Output: ["bob,50,1200,mtv"]
//
// Constraints:
//   1 <= transactions.length <= 1000
//   Names and cities consist of lowercase English letters.
//   0 <= time <= 1000, 0 <= amount <= 2000
//
// Follow-up: the naive pairwise check is fine for small inputs — how would
// you handle one user with a hundred thousand transactions?

const invalidTransactions = (transactions) => {

};

console.log(invalidTransactions(['alice,20,800,mtv', 'alice,50,100,beijing']));
// expected: ["alice,20,800,mtv","alice,50,100,beijing"]
console.log(invalidTransactions(['alice,20,800,mtv', 'alice,50,1200,mtv']));
// expected: ["alice,50,1200,mtv"]
console.log(invalidTransactions(['alice,20,800,mtv', 'bob,50,1200,mtv']));
// expected: ["bob,50,1200,mtv"]
