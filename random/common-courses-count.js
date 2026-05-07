// coding interview sample

/**
 * Common Courses Count (Find Pairs of Students with Shared Courses)
 * 
 * Problem Summary:
 * Given a list of student-course enrollment pairs, find all pairs of students
 * who share at least one course, and count how many courses each pair shares.
 * This is a common interview question at companies like Karat, Meta, and Google.
 * 
 * Input: Array of [studentId, courseId] pairs
 * Output: For each pair of students sharing courses, show the count (and optionally the courses)
 * 
 * Example:
 * Input: [["Alice", "Math"], ["Alice", "Physics"], ["Bob", "Math"], ["Bob", "History"]]
 * Output: Alice and Bob share 1 course (Math)
 * 
 * Possible Approaches:
 * 1. Brute Force: For each pair of students, iterate through all courses to find common ones.
 *    - Time: O(S² × C) where S = students, C = courses per student. Inefficient.
 * 2. HashMap + Pairwise Comparison: Build student→courses map, then compare each pair.
 *    - Time: O(S² × C), Space: O(S × C). Better organized but still quadratic in students.
 * 3. Course-Centric (Inverted Index): Build course→students map, then for each course,
 *    increment count for all student pairs enrolled in that course.
 *    - Time: O(E + P) where E = enrollments, P = total pairs across all courses.
 *    - Space: O(S × C). Most efficient for sparse data.
 * 
 * Chosen Approach: HashMap + Pairwise Comparison (Approach 2)
 * - Clear and intuitive logic.
 * - Efficient for moderate data sizes.
 * - Easy to extend (return course names, filter by minimum count, etc.).
 * - Interviewers often prefer this for readability.
 * 
 * Algorithm Steps:
 * 1. Build a HashMap: studentId → Set of courses they're enrolled in.
 * 2. Get all unique student IDs.
 * 3. For each pair of students (i, j) where i < j:
 *    a. Find the intersection of their course sets.
 *    b. If intersection is non-empty, record the pair and count.
 * 4. Return the results.
 * 
 * Why This Works:
 * - Using Sets allows O(min(C1, C2)) intersection via iteration + lookup.
 * - Generating pairs with i < j avoids duplicates (Alice-Bob vs Bob-Alice).
 * - HashMap provides O(1) lookup for each student's courses.
 * 
 * Time Complexity: O(E + S² × C)
 *   - E = number of enrollments to build the map
 *   - S² = number of student pairs to compare
 *   - C = average courses per student for set intersection
 * Space Complexity: O(E) for storing all enrollments in the map.
 * 
 * Key Patterns: HashMap, Set Intersection, Pairwise Comparison
 * 
 * Edge Cases:
 * - No shared courses: Returns empty result.
 * - Single student: No pairs to compare.
 * - Student enrolled in same course multiple times: Set handles duplicates.
 * - Empty input: Returns empty result.
 */

/**
 * Builds a map of student ID to their enrolled courses.
 * @param {string[][]} enrollments - Array of [studentId, courseId] pairs
 * @returns {Map<string, Set<string>>} - Map of studentId → Set of courses
 */
const buildStudentCoursesMap = (enrollments) => {
  const studentCourses = new Map();
  
  for (const [studentId, courseId] of enrollments) {
    if (!studentCourses.has(studentId)) {
      studentCourses.set(studentId, new Set());
    }
    studentCourses.get(studentId).add(courseId);
  }
  
  return studentCourses;
};

/**
 * Finds the intersection of two sets.
 * @param {Set<string>} setA - First set
 * @param {Set<string>} setB - Second set
 * @returns {string[]} - Array of common elements
 */
const findIntersection = (setA, setB) => {
  const result = [];
  // Iterate over the smaller set for efficiency
  const [smaller, larger] = setA.size <= setB.size ? [setA, setB] : [setB, setA];
  
  for (const item of smaller) {
    if (larger.has(item)) {
      result.push(item);
    }
  }
  
  return result;
};

/**
 * Finds all pairs of students who share courses and counts their shared courses.
 * @param {string[][]} enrollments - Array of [studentId, courseId] pairs
 * @returns {Object[]} - Array of { students: [id1, id2], count: number, courses: string[] }
 */
function findCommonCourses(enrollments) {
  // Step 1: Build student → courses map
  const studentCourses = buildStudentCoursesMap(enrollments);
  
  // Step 2: Get all student IDs
  const students = Array.from(studentCourses.keys());
  
  // Step 3: Compare each pair of students
  const results = [];
  
  for (let i = 0; i < students.length; i++) {
    for (let j = i + 1; j < students.length; j++) {
      const student1 = students[i];
      const student2 = students[j];
      
      const courses1 = studentCourses.get(student1);
      const courses2 = studentCourses.get(student2);
      
      // Find common courses
      const commonCourses = findIntersection(courses1, courses2);
      
      // Only include pairs with at least one shared course
      if (commonCourses.length > 0) {
        results.push({
          students: [student1, student2],
          count: commonCourses.length,
          courses: commonCourses.sort()
        });
      }
    }
  }
  
  return results;
}

/**
 * Alternative: Course-Centric Approach (Inverted Index)
 * More efficient when there are many students but few courses.
 * @param {string[][]} enrollments - Array of [studentId, courseId] pairs
 * @returns {Map<string, number>} - Map of "student1,student2" → count
 */
function findCommonCoursesInverted(enrollments) {
  // Step 1: Build course → students map
  const courseStudents = new Map();
  
  for (const [studentId, courseId] of enrollments) {
    if (!courseStudents.has(courseId)) {
      courseStudents.set(courseId, []);
    }
    courseStudents.get(courseId).push(studentId);
  }
  
  // Step 2: For each course, increment count for all student pairs
  const pairCounts = new Map();
  
  for (const [course, students] of courseStudents) {
    // Generate all pairs of students in this course
    for (let i = 0; i < students.length; i++) {
      for (let j = i + 1; j < students.length; j++) {
        // Create consistent key (sorted to avoid duplicates)
        const pair = [students[i], students[j]].sort().join(',');
        pairCounts.set(pair, (pairCounts.get(pair) || 0) + 1);
      }
    }
  }
  
  return pairCounts;
}

// ============ Test Cases ============

// Test Data: Student enrollments
const enrollments = [
  ['Alice', 'Math'],
  ['Alice', 'Physics'],
  ['Alice', 'Chemistry'],
  ['Bob', 'Math'],
  ['Bob', 'Physics'],
  ['Bob', 'History'],
  ['Charlie', 'Chemistry'],
  ['Charlie', 'History'],
  ['Charlie', 'Art'],
  ['Diana', 'Math'],
  ['Diana', 'Art'],
  ['Eve', 'Music']  // Eve shares no courses with anyone
];

console.log('=== Common Courses Count ===\n');

// Test Case 1: Main function
console.log('Test 1 - Find all pairs with shared courses:');
const results = findCommonCourses(enrollments);
results.forEach(({ students, count, courses }) => {
  console.log(`  ${students[0]} & ${students[1]}: ${count} course(s) - [${courses.join(', ')}]`);
});

console.log('\n--- Expected pairs ---');
console.log('  Alice & Bob: 2 (Math, Physics)');
console.log('  Alice & Charlie: 1 (Chemistry)');
console.log('  Alice & Diana: 1 (Math)');
console.log('  Bob & Charlie: 1 (History)');
console.log('  Bob & Diana: 1 (Math)');
console.log('  Charlie & Diana: 1 (Art)');
console.log('  Eve shares nothing with anyone');

// Test Case 2: Alternative inverted index approach
console.log('\nTest 2 - Inverted Index approach (count only):');
const pairCounts = findCommonCoursesInverted(enrollments);
for (const [pair, count] of pairCounts) {
  console.log(`  ${pair}: ${count} shared course(s)`);
}

// Test Case 3: Empty input
console.log('\nTest 3 - Empty input:', findCommonCourses([]));

// Test Case 4: Single student
console.log('Test 4 - Single student:', findCommonCourses([['Solo', 'Math'], ['Solo', 'Art']]));

// Test Case 5: No shared courses
console.log('Test 5 - No shared courses:', findCommonCourses([
  ['A', 'Course1'],
  ['B', 'Course2'],
  ['C', 'Course3']
]));
