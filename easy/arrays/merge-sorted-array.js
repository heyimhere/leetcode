const numbersOne = [1,2,3,0,0,0];
const numbersTwo = [2,5,6];
const countOne = 3;
const countTwo = 3;

// coding interview sample
/**
 * Merge Sorted Array - LeetCode #88
 * 
 * Problem Summary:
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * nums1 has enough space (size m + n) to hold all elements, with m elements initialized
 * and n zeros as placeholders. Modify nums1 in-place; do not return a new array.
 * 
 * Possible Approaches:
 * 1. Brute Force (Copy & Sort): Copy nums2 into nums1's empty slots, then sort.
 *    - Time: O((m+n) log(m+n)), Space: O(1) or O(m+n) depending on sort.
 * 2. Two Pointers (Front to Back): Merge from start, but requires shifting elements.
 *    - Time: O((m+n)²) due to shifts, Space: O(1). Inefficient.
 * 3. Extra Array: Merge into new array, copy back to nums1.
 *    - Time: O(m+n), Space: O(m+n). Uses extra space unnecessarily.
 * 4. Two Pointers (Back to Front): Merge from the end, filling nums1 from the back.
 *    - Time: O(m+n), Space: O(1). Optimal solution.
 * 
 * Chosen Approach: Two Pointers (Back to Front)
 * - Optimal O(m+n) time with O(1) space.
 * - No element shifting needed; each element placed exactly once.
 * - Leverages the extra space at the end of nums1 perfectly.
 * 
 * Algorithm Steps:
 * 1. Initialize three pointers:
 *    - p1: Last valid element in nums1 (index m - 1).
 *    - p2: Last element in nums2 (index n - 1).
 *    - p: Last position in nums1 (index m + n - 1).
 * 2. While both arrays have elements to process (p1 >= 0 && p2 >= 0):
 *    - Compare nums1[p1] and nums2[p2].
 *    - Place the larger element at nums1[p] and decrement the respective pointer.
 *    - Decrement p to move to the next position to fill.
 * 3. If nums2 has remaining elements (p2 >= 0):
 *    - Copy them directly to nums1 (they're already sorted and smaller).
 * 4. If nums1 has remaining elements, they're already in place (no action needed).
 * 
 * Why This Works:
 * - By filling from the back, we never overwrite unprocessed elements in nums1.
 * - The largest elements are placed first, ensuring correct sorted order.
 * - Both arrays are already sorted, so comparing last elements gives the global max.
 * - The extra zeros in nums1 provide exactly the space needed for nums2's elements.
 * 
 * Time Complexity: O(m + n) - Each element is visited and placed exactly once.
 * Space Complexity: O(1) - Only using pointers, modifying nums1 in-place.
 * 
 * Key Patterns: Two Pointers, In-Place Modification, Merge Sorted Arrays
 * 
 * Edge Cases:
 * - nums2 is empty (n = 0): No iterations, nums1 unchanged (already correct).
 * - nums1 is empty (m = 0): All of nums2 copied to nums1 via the cleanup loop.
 * - All nums2 elements larger: They fill the back of nums1 first.
 * - All nums2 elements smaller: nums1 elements stay in place, nums2 fills front.
 * - Duplicate values: Handled correctly; comparison uses >= or >.
 */
const merge = (nums1, m, nums2, n) => {
  let p1 = m - 1;      // Pointer to last valid element in nums1
  let p2 = n - 1;      // Pointer to last element in nums2
  let p = m + n - 1;   // Pointer to last position in nums1
  
  // Merge from back to front
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
  
  // Copy remaining elements from nums2 (if any)
  // No need to copy remaining nums1 elements - they're already in place
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
  
  return nums1;
};


console.log('merge', merge(numbersOne, countOne, numbersTwo, countTwo));
