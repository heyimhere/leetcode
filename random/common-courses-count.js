
const data = {
  "58": ["Software Design", "Linear Algebra", "Art History", "Music Theory"],
  "94": ["Music Theory", "Calculus", "Physics", "World History"],
  "17": ["Software Design", "Linear Algebra", "Economics"]
};

// if sorted
// const commonCoursesCount = (studentCourses) => {
//   const entries = Object.entries(studentCourses);
//
//   const result = [];
//   for(let i = 0; i < entries.length; i++) {
//     const [studentA, classesA] = entries[i];
//     for(let j = i + 1; j < entries.length; j++) {
//       const [studentB, classesB] = entries[j];
//
//       let pA = 0;
//       let pB = 0;
//       let count = 0;
//       while(pA < classesA.length && pB < classesB.length) {
//         if(classesA[pA] === classesB[pB]) {
//           count++;
//           pA++;
//           pB++;
//         } else if(classesA[pA] < classesB[pB]) {
//           pA++;
//         } else {
//           pB++;
//         }
//       }
//
//       if(count > 0) {
//         result.push([studentA, studentB, count]);
//       }
//     }
//   }
//
//   return result;
// };

// const commonCoursesCount = (studentCourses) => {
//   const entries = Object.entries(studentCourses);
//   const result = [];
//
//   for(let i = 0; i < entries.length; i++) {
//     const [studentA, classesA] = entries[i];
//     const setA = new Set(classesA);
//
//     for(let j = i + 1; j < entries.length; j++) {
//       const [studentB, classesB] = entries[j];
//       let count = 0;
//
//       for(let c of classesB) {
//         if(setA.has(c)) {
//           count++;
//           setA.delete(c);
//         }
//       }
//
//       if(count > 0) {
//         result.push([studentA, studentB, count]);
//       }
//     }
//   }
//
//   return result;
// }

const commonCoursesCount = (studentCourses) => {
  const entries = Object.entries(studentCourses);
  const result = [];

  for(let i = 0; i < entries.length; i++) {
    const [studentA, courseA] = entries[i];
    const setA = new Set(courseA);

    for(let j = i + 1; j < entries.length; j++) {
      const [studentB, courseB] = entries[j];
      let count = 0;

      for(let c of courseB) {
        if(setA.has(c)) {
          count++;
          setA.delete(c);
        }
      }

      if(count > 0) {
        result.push([studentA, studentB, count]);
      }
    }
  }

  return result;
};

// const commonCoursesCount = (studentCourses) => {
//   const byClass = {};
//   for(let [stu, courses] of Object.entries(studentCourses)) {
//     for(let c of courses) {
//       (byClass[c] ||= []).push(stu);
//     }
//   }
//   console.log('byClass', byClass);
//
//   const pairCount = {};
//   for(let students of Object.values(byClass)) {
//     for(let i = 0; i < students.length; i++) {
//       for(let j = i + 1; j < students.length; j++) {
//         const key = students[i] < students[j] 
//           ? `${students[i]},${students[j]}`
//           : `${students[j]},${students[i]}`
//
//         pairCount[key] = (pairCount[key] || 0) + 1;
//       }
//     }
//   }
//
//   return Object.entries(pairCount).map(([key, value]) => {
//     const [a, b] = key.split(',');
//     return [a, b, value];
//   }).filter(([, , value]) => value > 0);
// }

console.log('common courses', commonCoursesCount(data))
