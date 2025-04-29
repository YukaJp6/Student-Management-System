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
function formatStudents() {
    return students.map(student => `${student.name} - Grade: ${student.grade}`);
}