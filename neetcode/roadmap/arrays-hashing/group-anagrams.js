
/**
 * Groups anagrams together from an array of strings.
 * Uses sorted characters as keys to identify anagrams efficiently.
 * 
 * Algorithm:
 * 1. Create a Map to group words by their sorted character signature
 * 2. For each word, generate a key by sorting its characters
 * 3. Group words with the same sorted key together
 * 4. Return all groups as an array of arrays
 * 
 * Time Complexity: O(n * m log m) where n is number of words, m is average word length
 * Space Complexity: O(n * m) for storing all words in the map
 * 
 * @param {string[]} words - Array of strings to group by anagrams
 * @returns {string[][]} Array of arrays, each containing anagram groups
 */
const groupAnagrams = (words) => {
    // Handle edge case: empty or null input
    if (!words || words.length === 0) return [];
    
    const anagramGroups = new Map();
    
    for (const currentWord of words) {
        // Create a unique key by sorting the characters of the word
        // Anagrams will have the same sorted character sequence
        const sortedCharacterKey = currentWord.split('').sort().join('');
        
        // Initialize group if this is the first word with this key
        if (!anagramGroups.has(sortedCharacterKey)) {
            anagramGroups.set(sortedCharacterKey, []);
        }
        
        // Add current word to its anagram group
        anagramGroups.get(sortedCharacterKey).push(currentWord);
    }
    
    // Return all anagram groups as an array of arrays
    return Array.from(anagramGroups.values());
};

console.log('group anagrams', groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
