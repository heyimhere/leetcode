// LC #211 — Design Add and Search Words Data Structure   [Medium]   Pattern: Tries / Design
//
// Design a structure that stores words and supports searching with a
// single-character wildcard.
//
// Implement the WordDictionary class:
//   WordDictionary()   initializes the structure
//   addWord(word)      adds word to the structure
//   search(word)       returns true if any stored word matches. The query
//                      may contain '.', which matches ANY one character.
//
// Example:
//   addWord("bad"); addWord("dad"); addWord("mad")
//   search("pad")  -> false
//   search("bad")  -> true
//   search(".ad")  -> true
//   search("b..")  -> true
//
// Constraints:
//   1 <= word.length <= 25
//   addWord receives only lowercase English letters.
//   search receives lowercase letters and '.', with at most 2 dots.
//   At most 10^4 calls will be made to addWord and search.

class WordDictionary {
  constructor() {

  }

  addWord(word) {

  }

  search(word) {

  }
}

const wd = new WordDictionary();
wd.addWord('bad');
wd.addWord('dad');
wd.addWord('mad');
console.log(wd.search('pad')); // expected: false
console.log(wd.search('bad')); // expected: true
console.log(wd.search('.ad')); // expected: true
console.log(wd.search('b..')); // expected: true
console.log(wd.search('b.')); // expected: false
