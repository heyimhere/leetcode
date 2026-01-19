// study course
const data = {
  58: ["Software Design", "Linear Algebra", "Art History", "Music Theory"],
  94: ["Music Theory", "Calculus", "Physics", "World History"],
  17: ["Software Design", "Linear Algebra", "Economics"],
};

// grouping in pairs
const commonCoursesCount = (studentCourses) => {
  const entries = Object.entries(studentCourses);
  const result = [];

  for (let i = 0; i < entries.length; i++) {
    const [studentA, courseA] = entries[i];
    const setA = new Set(courseA);

    for (let j = i + 1; j < entries.length; j++) {
      const [studentB, courseB] = entries[j];
      let count = 0;

      for (let c of courseB) {
        if (setA.has(c)) {
          count++;
        }
      }

      if (count > 0) {
        result.push([studentA, studentB, count]);
      }
    }
  }

  return result;
};

console.log("common courses", commonCoursesCount(data));

// grouping by array
const commonCoursesCountArray = (studentCourses) => {
  // code here
};

console.log("courses array", commonCoursesCountArray(data));

const hobbyData = {
  101: ["Hiking", "Photography", "Cooking", "Gaming"],
  204: ["Gaming", "Traveling", "Reading", "Fitness"],
  356: ["Hiking", "Cooking", "Gardening"],
  478: ["Photography", "Drawing", "Painting", "Reading"],
  589: ["Gaming", "Hiking", "Fitness"],
};

// grouping by cohort
const groupBySharedHobbies = (data) => {
  const normalized = {};

  for (const [u, hobbies] of Object.entries(data)) {
    normalized[u] = [...new Set(hobbies)];
  }

  const byHobby = {};
  for (const [u, hobbies] of Object.entries(normalized)) {
    for (const h of hobbies) {
      (byHobby[h] ??= []).push(u);
    }
  }

  const cohortToHobbies = new Map();
  const usersWhoShareSomething = new Set();

  for (const [hobby, users] of Object.entries(byHobby)) {
    if (users.length >= 2) {
      const cohort = users.slice().sort();
      const key = cohort.join("|");
      if (!cohortToHobbies.has(key)) cohortToHobbies.set(key, new Set());
      cohortToHobbies.get(key).add(hobby);

      users.forEach((u) => usersWhoShareSomething.add(u));
    }
  }

  for (const u of Object.keys(normalized)) {
    if (!usersWhoSharedSomething.has(u)) {
      const key = u;
      cohortToHobbies.set(key, new Set(normalized[u]));
    }
  }

  const arrOutput = [];
  const objOutput = {};

  for (const [key, hobbiesSet] of cohortToHobbies.entries()) {
    const users = key.split("|");
    const hobbies = Array.from(hobbiesSet).sort();
    arrOutput.push([users, hobbies]);
    objOutput[key] = hobbies;
  }

  return { array: arrOutput, object: objOutput };
};

const { array, object } = groupBySharedHobbies(hobbyData);
console.log("array", array);
console.log("object", object);
