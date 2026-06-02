// TODO: implement
// coding interview sample (Karat-style)

/**
 * Find Courses in Common
 *
 * Problem Summary:
 *   You're given a list of (studentId, courseId) enrollment pairs. Build a
 *   function `coursesInCommon(pairs, studentA, studentB)` that returns
 *   the set of courseIds that BOTH students took.
 *
 *   Part 2 (often the live extension): generalize to `commonCoursesAllPairs(pairs)`
 *   that returns a Map of "student pair → shared courses" for every pair
 *   of students with at least ONE shared course.
 *
 *   This question is a Karat / Roblox / Asana phone-screen classic. It
 *   tests hash-map literacy (grouping), set-intersection idioms, and
 *   careful pair enumeration in Part 2.
 *
 * Input:
 *   pairs: Array of [studentId, courseId]
 *   studentA, studentB: strings
 * Output:
 *   string[]  (the shared course IDs; any order)
 *
 * Example:
 *   pairs = [
 *     ["58","Linear Algebra"],
 *     ["94","Art History"],
 *     ["94","Operating Systems"],
 *     ["17","Software Design"],
 *     ["58","Mechanics"],
 *     ["58","Economics"],
 *     ["17","Linear Algebra"],
 *     ["17","Political Science"],
 *     ["94","Economics"]
 *   ]
 *   coursesInCommon(pairs, "58", "17") → ["Linear Algebra"]
 *
 * Approach:
 *   1. Build Map<studentId, Set<courseId>> in one linear pass.
 *   2. Intersect the two students' sets.
 *
 * Why a Map of Sets:
 *   O(1) per insertion; O(1) per "did student X take course Y" lookup.
 *   Set intersection is O(min(|A|, |B|)).
 *
 * Time:  O(P) build; O(min(|A|, |B|)) intersect
 * Space: O(P)
 *
 * Edge Cases:
 *   - Either student has no courses (or doesn't exist) → []
 *   - All courses shared → return the whole set
 *   - Duplicate enrollments → Set dedupes naturally
 */

/**
 * @param {[string, string][]} pairs
 * @param {string} studentA
 * @param {string} studentB
 * @returns {string[]}
 */
const coursesInCommon = (pairs, studentA, studentB) => {
  // your code here
};

/**
 * Part 2 — every pair of students with shared courses.
 * @param {[string, string][]} pairs
 * @returns {Map<string, string[]>}   keys "studentA,studentB" sorted; value = shared courses
 */
const commonCoursesAllPairs = (pairs) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Find Courses in Common ===\n');

const pairs = [
  ['58', 'Linear Algebra'],
  ['94', 'Art History'],
  ['94', 'Operating Systems'],
  ['17', 'Software Design'],
  ['58', 'Mechanics'],
  ['58', 'Economics'],
  ['17', 'Linear Algebra'],
  ['17', 'Political Science'],
  ['94', 'Economics'],
];

console.log('Test 1 — 58 & 17:');
console.log(coursesInCommon(pairs, '58', '17'));
// Expected: ['Linear Algebra']

console.log('\nTest 2 — 58 & 94:');
console.log(coursesInCommon(pairs, '58', '94'));
// Expected: ['Economics']

console.log('\nTest 3 — Part 2, all pairs:');
console.log(commonCoursesAllPairs(pairs));
// Expected: a Map with at least:
//   '17,58' → ['Linear Algebra']
//   '58,94' → ['Economics']
