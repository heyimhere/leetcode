// coding interview sample

/**
 * Merge Two Sorted Lists - LeetCode #21
 * 
 * Problem Summary:
 * Given the heads of two sorted linked lists, merge them into one sorted list.
 * The merged list should be made by splicing together the nodes of the two input lists.
 * Return the head of the merged linked list.
 * 
 * Possible Approaches:
 * 1. Iterative with Dummy Node: Use a dummy head and iterate through both lists,
 *    attaching the smaller node each time.
 *    - Time: O(n + m), Space: O(1). Clean and efficient.
 * 2. Recursive: Compare heads, recursively merge the rest, and link nodes.
 *    - Time: O(n + m), Space: O(n + m) for call stack. Elegant but uses stack space.
 * 3. Create New List: Build a completely new list by copying values.
 *    - Time: O(n + m), Space: O(n + m). Wasteful; doesn't reuse existing nodes.
 * 
 * Chosen Approach: Recursive
 * - Elegant and concise solution that naturally handles the linked list structure.
 * - Each recursive call handles one node comparison and delegates the rest.
 * - Base cases handle when either list is exhausted.
 * 
 * Algorithm Steps:
 * 1. Base Case 1: If list1 is null, return list2 (nothing left to merge from list1).
 * 2. Base Case 2: If list2 is null, return list1 (nothing left to merge from list2).
 * 3. Compare the values of the current nodes:
 *    - If list1.val <= list2.val: list1 should come first.
 *      Set list1.next to the result of merging list1.next with list2.
 *      Return list1 as the head of this merged segment.
 *    - Else: list2 should come first.
 *      Set list2.next to the result of merging list1 with list2.next.
 *      Return list2 as the head of this merged segment.
 * 
 * Why This Works:
 * - At each step, we pick the smaller node and recursively solve the subproblem.
 * - The recursion naturally builds the merged list from the end back to the start.
 * - Both lists are already sorted, so comparing heads gives the global minimum.
 * 
 * Time Complexity: O(n + m) - Each node is visited exactly once.
 * Space Complexity: O(n + m) - Recursive call stack depth equals total nodes.
 * 
 * Key Patterns: Recursion, Linked List Manipulation, Divide and Conquer
 * 
 * Edge Cases:
 * - Both lists empty: Returns null (first base case triggers).
 * - One list empty: Returns the non-empty list directly.
 * - Lists of different lengths: Handled naturally; shorter list exhausts first.
 * - Duplicate values: Handled correctly with <= comparison.
 * - Single node lists: Works correctly through base cases.
 */
/**
 * Definition for singly-linked list node.
 */
class ListNode {
  /**
   * @param {number} val - The value of the node
   * @param {ListNode|null} next - Reference to the next node
   */
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to create a linked list from an array
const createLinkedList = (arr) => {
  if (!arr || arr.length === 0) return null;
  
  const head = new ListNode(arr[0]);
  let current = head;
  
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  
  return head;
};

// Helper function to convert linked list to array for display
const linkedListToArray = (head) => {
  const result = [];
  let current = head;
  
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  
  return result;
};

/**
 * Merges two sorted linked lists into one sorted linked list.
 * @param {ListNode|null} list1 - Head of the first sorted linked list
 * @param {ListNode|null} list2 - Head of the second sorted linked list
 * @returns {ListNode|null} - Head of the merged sorted linked list
 */
function mergeTwoLists(list1, list2) {
  // Base Case 1: If list1 is exhausted, return remaining list2
  if (!list1) {
    return list2;
  }
  // Base Case 2: If list2 is exhausted, return remaining list1
  if (!list2) {
    return list1;
  }
  
  // Recursive Case: Pick the smaller node and recurse
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

// ============ Test Cases ============

// Test Case 1: Basic merge - list1 = [1, 2, 4], list2 = [1, 3, 4]
// Expected output: [1, 1, 2, 3, 4, 4]
const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);
console.log('Test 1 - Merge [1,2,4] and [1,3,4]:', linkedListToArray(mergeTwoLists(list1, list2)));

// Test Case 2: Both lists empty
// Expected output: []
const emptyList1 = createLinkedList([]);
const emptyList2 = createLinkedList([]);
console.log('Test 2 - Merge [] and []:', linkedListToArray(mergeTwoLists(emptyList1, emptyList2)));

// Test Case 3: One list empty
// Expected output: [0]
const list3 = createLinkedList([]);
const list4 = createLinkedList([0]);
console.log('Test 3 - Merge [] and [0]:', linkedListToArray(mergeTwoLists(list3, list4)));

// Test Case 4: Different length lists
// Expected output: [1, 2, 3, 4, 5, 6, 7]
const list5 = createLinkedList([1, 3, 5, 7]);
const list6 = createLinkedList([2, 4, 6]);
console.log('Test 4 - Merge [1,3,5,7] and [2,4,6]:', linkedListToArray(mergeTwoLists(list5, list6)));
