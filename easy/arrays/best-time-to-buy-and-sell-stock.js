const p = [7, 1, 5, 3, 6, 4];
// coding interview sample

/**
 * Best Time to Buy and Sell Stock - LeetCode #121
 * 
 * Problem Summary:
 * Given an array of stock prices where prices[i] is the price on day i,
 * find the maximum profit from one buy and one sell transaction.
 * You must buy before you sell. Return 0 if no profit is possible.
 * 
 * Possible Approaches:
 * 1. Brute Force: Check every buy/sell pair (i < j), track max profit.
 *    - Time: O(n²), Space: O(1). Too slow for large inputs.
 * 2. Dynamic Programming: Track max profit ending at each day.
 *    - Time: O(n), Space: O(n) or O(1) with optimization.
 * 3. Greedy (One Pass): Track minimum price seen so far, calculate profit at each step.
 *    - Time: O(n), Space: O(1). Optimal solution.
 * 4. Two Pointers: Left pointer for buy, right for sell, slide based on comparison.
 *    - Time: O(n), Space: O(1). Equivalent to greedy approach.
 * 
 * Chosen Approach: Greedy (One Pass with Min Tracking)
 * - Optimal O(n) time with O(1) space.
 * - Simple logic: always buy at the lowest price seen so far.
 * - At each day, check if selling today yields a better profit.
 * 
 * Algorithm Steps:
 * 1. Initialize minPrice to Infinity (ensures first price becomes the min).
 * 2. Initialize maxProfit to 0 (no transaction = 0 profit).
 * 3. Iterate through each price:
 *    - Update minPrice if current price is lower (better buy opportunity).
 *    - Calculate potential profit: current price - minPrice.
 *    - Update maxProfit if this profit is higher than previous best.
 * 4. Return maxProfit after processing all prices.
 * 
 * Why This Works:
 * - For any selling day, the best buy day is the minimum price before it.
 * - By tracking the running minimum, we always have the optimal buy price.
 * - Checking profit at each step ensures we don't miss the global maximum.
 * - Greedy choice: always use the best buy price available up to current day.
 * 
 * Kadane's Algorithm Variant (Conceptual Connection):
 * - Kadane's algorithm works by tracking the maximum subarray sum ending at each index.
 * - At every step, we decide whether it's better to start fresh or extend the previous result.
 * - If the running value becomes unfavorable (negative sum / higher price), we discard it.
 * - We keep track of the maximum seen so far as the answer.
 * - In this stock problem: instead of tracking running sum, we track running minimum price.
 * - The "profit at each day" is analogous to "subarray sum ending at each index."
 * - This gives us a linear time solution O(n) with constant space O(1).
 * 
 * Time Complexity: O(n) - Single pass through the prices array.
 * Space Complexity: O(1) - Only two variables regardless of input size.
 * 
 * Key Patterns: Greedy, One Pass, Running Minimum, Kadane's Variant
 * 
 * Edge Cases:
 * - Empty array: Returns 0 (no iterations, maxProfit stays 0).
 * - Single element: Returns 0 (can't buy and sell on same day).
 * - Decreasing prices: Returns 0 (no profitable transaction possible).
 * - All same prices: Returns 0 (no profit from equal buy/sell).
 * - Minimum at end: Still works, profit calculated against earlier mins.
 */
const maxProfit = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;
  
  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  }
  
  return maxProfit;
};


console.log("max profit", maxProfit(p));
