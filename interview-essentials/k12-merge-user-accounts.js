// Karat-style — Merge User Accounts   [Medium]   Pattern: Union-Find / Graphs
//
// Each account is an array [name, email1, email2, ...]. Two accounts belong
// to the same person if they share AT LEAST ONE email. Note that the same
// name can belong to different people — names do not identify a user.
//
// Merge the accounts and return a list where each entry is the name followed
// by all of that person's distinct emails, sorted ascending. The accounts
// themselves may be returned in any order.
//
// Example 1:
//   Input: [
//     ["John","johnsmith@mail.com","john00@mail.com"],
//     ["John","johnnybravo@mail.com"],
//     ["John","johnsmith@mail.com","john_newyork@mail.com"],
//     ["Mary","mary@mail.com"]
//   ]
//   Output: [
//     ["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],
//     ["John","johnnybravo@mail.com"],
//     ["Mary","mary@mail.com"]
//   ]
//
// Example 2:
//   Input:  [["Alex","alex@m.co"],["Alex","alex@m.co"]]
//   Output: [["Alex","alex@m.co"]]
//
// Example 3:
//   Input:  []
//   Output: []
//
// Constraints:
//   1 <= accounts.length <= 1000
//   2 <= accounts[i].length <= 10
//
// Follow-up: support lookups after merging — given an email, who owns it?

const accountsMerge = (accounts) => {

};

console.log(accountsMerge([
  ['John', 'johnsmith@mail.com', 'john00@mail.com'],
  ['John', 'johnnybravo@mail.com'],
  ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
  ['Mary', 'mary@mail.com'],
]));
// expected: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],
//            ["John","johnnybravo@mail.com"],["Mary","mary@mail.com"]] (any order)

console.log(accountsMerge([['Alex', 'alex@m.co'], ['Alex', 'alex@m.co']]));
// expected: [["Alex","alex@m.co"]]
console.log(accountsMerge([])); // expected: []
