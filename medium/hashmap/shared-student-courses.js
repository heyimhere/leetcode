
const studentCoursePairs1 = [
	["58", "Linear Algebra"],
	["94", "Art History"],
	["94", "Operating Systems"],
	["17", "Software Design"],
	["58", "Mechanics"],
	["58", "Economics"],
	["17", "Linear Algebra"],
	["17", "Political Science"],
	["94", "Economics"],
	["25", "Economics"],
	["58", "Software Design"]
];

const findSharedCourses = (studentCourses) => {
	const studentToCourses = {};
	const sharedCourses = {};

	studentCourses.forEach(([studentId, course]) => {
		if(!studentToCourses[studentId]) {
			studentToCourses[studentId] = new Set();
		}
		studentToCourses[studentId].add(course);
	});

	const studentIds = Object.keys(studentToCourses);
	for(let i = 0; i < studentIds.length - 1; i++) {
		for(let j = i + 1; j < studentIds.length; j++) {
			const student1 = studentIds[i];
			const student2 = studentIds[j];
			const courses1 = studentToCourses[student1];
			const courses2 = studentToCourses[student2];
			const shared = [...courses1].filter(course => courses2.has(course));

			if(shared.length > 0) {
				sharedCourses[`${student1},${student2}`] = shared;
			}
		}
	}
	return sharedCourses;
}

const findSharedCourses = (studentCourses) => {
	const studentToCourses = {};
	const sharedCourses = {};

	studentCourses.forEach(([studentId, course]) => {
		if(!studentToCourses[studentId]) {
			studentToCourses[studentId] = new Set();
		}
		studentToCourses[studentId].add(course);
	});

	const studentIds = Object.keys(studentToCourses);
	for(let i = 0; i < studentIds.length - 1; i++) {
		for(let j = i + 1; j < studentIds.length; j++) {
			const student1 = studentIds[i];
			const student2 = studentIds[j];
			const courses1 = studentToCourses[student1];
			const courses2 = studentToCourses[student2];
			const shared = [...courses1].filter(course => courses2.has(course));

			if(shared.length > 0) {
				sharedCourses[`${student1},${student2}`] = shared;
			}
		}
	}
	return sharedCourses;
}

console.log('shared courses', findSharedCourses(studentCoursePairs1));
