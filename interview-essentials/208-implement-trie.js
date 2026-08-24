// LC #208 — Implement Trie (Prefix Tree)   [Medium]   Pattern: Tries / Design
//
// A trie is a tree structure used to store and retrieve strings by prefix.
// Implement it with the following API:
//
//   Trie()              initializes an empty trie
//   insert(word)        inserts word into the trie
//   search(word)        returns true if the EXACT word was inserted before
//   startsWith(prefix)  returns true if any inserted word begins with prefix
//
// Example:
//   insert("apple")
//   search("apple")     -> true
//   search("app")       -> false    (inserted as a prefix only, not a word)
//   startsWith("app")   -> true
//   insert("app")
//   search("app")       -> true
//
// Constraints:
//   1 <= word.length, prefix.length <= 2000
//   word and prefix consist only of lowercase English letters.
//   At most 3 * 10^4 calls will be made across all three methods.

class Trie {
  constructor() {

  }

  insert(word) {

  }

  search(word) {

  }

  startsWith(prefix) {

  }
}

const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple'));     // expected: true
console.log(trie.search('app'));       // expected: false
console.log(trie.startsWith('app'));   // expected: true
trie.insert('app');
console.log(trie.search('app'));       // expected: true
console.log(trie.startsWith('bana'));  // expected: false
