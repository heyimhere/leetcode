/**
 * Reverses the order of words in a string while handling multiple spaces.
 * Uses array manipulation and string building for efficient word reversal.
 * 
 * Algorithm:
 * 1. Split the input string by spaces to get an array of words and empty strings
 * 2. Iterate through the array from right to left (reverse order)
 * 3. Skip empty strings that result from multiple consecutive spaces
 * 4. Build the result string by concatenating valid words with single spaces
 * 
 * Time Complexity: O(n) - where n is the length of the input string
 * Space Complexity: O(n) - for the words array and result string
 * 
 * @param {string} inputString - The input string containing words separated by spaces
 * @returns {string} String with words in reversed order, extra spaces removed
 * 
 * Example:
 * Input: "the sky is  blue"
 * Output: "blue is sky the"
 */
const testInputString = "the sky is  blue";

const reverseWords = function(inputString) {
	const wordsArray = inputString.split(' ');
	let reversedWordsString = '';
	
	for(let currentIndex = wordsArray.length - 1; currentIndex >= 0; currentIndex--) {
		const currentWord = wordsArray[currentIndex];
		
		// Skip empty strings (multiple spaces)
		if(currentWord) {
			reversedWordsString += (reversedWordsString ? ' ' : '') + currentWord;
		}
	}
	
	return reversedWordsString;
};

