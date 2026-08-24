// Karat-style — Subdomain Visit Counter   [Medium]   Pattern: Hashmap / String Parsing
//
// You are given a list of count-paired domains — strings of the form
// "<count> <domain>", such as "9001 discuss.leetcode.com".
//
// A visit to a domain also counts as a visit to every one of its PARENT
// domains. Visiting "discuss.leetcode.com" is also a visit to "leetcode.com"
// and to "com".
//
// Return an array of "<count> <domain>" strings covering every subdomain
// that received at least one visit. Any order is fine.
//
// Example 1:
//   Input:  ["9001 discuss.leetcode.com"]
//   Output: ["9001 discuss.leetcode.com","9001 leetcode.com","9001 com"]
//
// Example 2:
//   Input:  ["900 google.mail.com","50 yahoo.com","1 intel.mail.com","5 wiki.org"]
//   Output: ["901 mail.com","50 yahoo.com","900 google.mail.com",
//            "5 wiki.org","5 org","1 intel.mail.com","951 com"]
//
// Example 3:
//   Input:  []
//   Output: []
//
// Follow-up the interviewer usually asks: now return only the top k most
// visited subdomains, ordered by count descending.

const subdomainVisits = (cpdomains) => {

};

console.log(subdomainVisits(['9001 discuss.leetcode.com']));
// expected: ["9001 discuss.leetcode.com","9001 leetcode.com","9001 com"] (any order)

console.log(subdomainVisits(['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org']));
// expected: counts roll up — "901 mail.com", "951 com", "5 org", etc. (any order)

console.log(subdomainVisits([])); // expected: []
