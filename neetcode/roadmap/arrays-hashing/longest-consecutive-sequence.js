/**
 * Finds the length of the longest consecutive sequence in an array of integers.
 * Uses a HashSet approach for O(n) time complexity.
 * 
 * Algorithm:
 * 1. Convert array to Set for O(1) lookups
 * 2. For each number, check if it's the start of a sequence (no num-1 exists)
 * 3. If it's a sequence start, count consecutive numbers forward
 * 4. Track the maximum sequence length found
 * 
 * Time Complexity: O(n) - each number is visited at most twice
 * Space Complexity: O(n) - for the Set storage
 * 
 * @param {number[]} nums - Array of integers (can contain duplicates)
 * @returns {number} Length of the longest consecutive sequence
 */
const longestConsecutive = (nums) => {
    // Handle edge case: empty array
    if (!nums || nums.length === 0) return 0;
    
    let maxSequenceLength = 0;
    const uniqueNumbers = new Set(nums);
    
    for (const currentNumber of uniqueNumbers) {
        // Skip if this number is not the start of a sequence
        // (i.e., if currentNumber - 1 exists, this is part of a longer sequence)
        if (uniqueNumbers.has(currentNumber - 1)) {
            continue;
        }
        
        // This number is the start of a potential sequence
        let currentSequenceLength = 0;
        let sequenceNumber = currentNumber;
        
        // Count consecutive numbers starting from currentNumber
        while (uniqueNumbers.has(sequenceNumber)) {
            currentSequenceLength++;
            sequenceNumber++;
        }
        
        // Update maximum sequence length if current sequence is longer
        maxSequenceLength = Math.max(maxSequenceLength, currentSequenceLength);
    }
    
    return maxSequenceLength;
};

console.log('longest consecutive', longestConsecutive([100, 4, 200, 1, 3, 2]));
