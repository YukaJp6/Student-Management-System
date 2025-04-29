// students array

const students = [];


//  function for adding students
function addStudent(name, grade) {
    students.push ({
        name,
        grade,
    });
}

// function to remove students
function removeStudent(name) {
    const index = students.findIndex((student) => student.name === name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(name, `has been removed`);
    } else {
        console.log(name, `was not found`);
    }
}

// function to filter through top students
function filterTopStudents(minGrade) {
    return students.filter(student => student.grade >= minGrade);
}

// function to map students into formatted list
function formatStudentList() {
    return students.map(student => `${student.name} - Grade: ${student.grade}`);
}

// start
console.log("students =", students);

// add students
addStudent("Alice", 85);
addStudent("Bob", 90);
addStudent("Charles", 78);
addStudent("Dave", 60);
addStudent("Emma", 92);

// show list of students in console
console.log("Student List:");
console.log(formatStudentList());

// remove student "Charles"
removeStudent("Charles");

// show updated list of students in console
console.log("Student List:");
console.log(formatStudentList());

// filter remaining student list to show >= 80 grade
console.log("Students with grade equal to or higher than 80");
console.log(filterTopStudents(80));