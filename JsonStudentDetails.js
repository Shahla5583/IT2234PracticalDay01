 
	 //Define 10 students JSON
	 //store it in an array
	 //find the female students
	 //find the students who are following it course
	 //find the max and average GPA among the students
	 
	 
	
   let students = [
    { regNo: '2021/ict/126', name: 'Sha', age: 25, gender: 'Male', course: 'IT', GPA: 3.2 },
    { regNo: '2021/ict/109', name: 'Sam', age: 24, gender: 'Male', course: 'IT', GPA: 3.5 },
    { regNo: '2021/ict/113', name: 'Thisha', age: 23, gender: 'Female', course: 'IT', GPA: 3.8 },
    { regNo: '2021/ict/037', name: 'Zahee', age: 24, gender: 'Male', course: 'IT', GPA: 3.1 },
    { regNo: '2021/ict/042', name: 'Aisha', age: 22, gender: 'Female', course: 'Business', GPA: 3.7 },
    { regNo: '2021/ict/052', name: 'Nisha', age: 23, gender: 'Female', course: 'IT', GPA: 3.9 },
    { regNo: '2021/ict/061', name: 'Ravi', age: 25, gender: 'Male', course: 'Engineering', GPA: 3.3 },
    { regNo: '2021/ict/078', name: 'Amal', age: 22, gender: 'Male', course: 'IT', GPA: 2.9 },
    { regNo: '2021/ict/086', name: 'Kavya', age: 21, gender: 'Female', course: 'Science', GPA: 3.6 },
    { regNo: '2021/ict/099', name: 'Samantha', age: 24, gender: 'Female', course: 'IT', GPA: 3.4 }
];

// Find female students using a for loop
let femaleStudents = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].gender == 'Female') {
        femaleStudents.push(students[i]);
    }
}

console.log("Female Students:");
console.log(femaleStudents);

// Find students who are following the IT course using a for loop
let itStudents = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].course == 'IT') {
        itStudents.push(students[i]);
    }
}

console.log("Students following IT course:");
console.log(itStudents);

// Find the max GPA using a for loop
let maxGPA = students[0].GPA;
for (let i = 1; i < students.length; i++) {
    if (students[i].GPA > maxGPA) {
        maxGPA = students[i].GPA;
    }
}

console.log("Maximum GPA:", maxGPA);

// Find the average GPA using a for loop
let totalGPA = 0;
for (let i = 0; i < students.length; i++) {
    totalGPA += students[i].GPA;
}
let avgGPA = totalGPA / students.length;

console.log("Average GPA:", avgGPA.toFixed(2)); // Round to 2 decimal places