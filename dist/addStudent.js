import { students } from "./main";
import { renderStudents } from "./main";
const studentForm = document.getElementById("new-student-form");
const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const addStudent = (event) => {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    const name = nameInput.value;
    const age = parseInt(ageInput.value);
    let newId;
    if (students.length > 0) {
        newId = Math.max(...students.map((student) => student.id)) + 1;
    }
    else {
        newId = 1;
    }
    const newStudent = {
        id: newId,
        name: name,
        age: age,
        // isActive: false,
    };
    students.push(newStudent);
    renderStudents(students);
};
studentForm.addEventListener("submit", addStudent);
//# sourceMappingURL=addStudent.js.map