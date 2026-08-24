// Karat-style — Find Courses in Common   [Easy]   Pattern: Hashmap / Sets
//
// You are given a list of [studentId, courseId] enrollment pairs.
//
// Return the list of courses that BOTH of two given students took.
// Any order is fine.
//
// Example 1:
//   Input: pairs = [
//            ["58","Linear Algebra"],
//            ["94","Art History"],
//            ["94","Operating Systems"],
//            ["17","Software Design"],
//            ["58","Mechanics"],
//            ["58","Economics"],
//            ["17","Linear Algebra"],
//            ["17","Political Science"],
//            ["94","Economics"]
//          ], studentA = "58", studentB = "17"
//   Output: ["Linear Algebra"]
//
// Example 2:
//   Same pairs, studentA = "58", studentB = "94"
//   Output: ["Economics"]
//
// Example 3:
//   Same pairs, studentA = "17", studentB = "94"
//   Output: []
//
// Follow-up, asked live almost every time: return the shared courses for
// EVERY pair of students that has at least one in common.

const coursesInCommon = (pairs, studentA, studentB) => {

};

const enrollments = [
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

console.log(coursesInCommon(enrollments, '58', '17')); // expected: ["Linear Algebra"]
console.log(coursesInCommon(enrollments, '58', '94')); // expected: ["Economics"]
console.log(coursesInCommon(enrollments, '17', '94')); // expected: []
