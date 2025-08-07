import { Student } from "./main";
import { students } from "./main";
import { renderStudents } from "./main";

const studentForm = document.getElementById("new-student-form") as HTMLFormElement;
const nameInput = document.getElementById("name-input") as HTMLInputElement;
const ageInput = document.getElementById("age-input") as HTMLInputElement;

const addStudent = (event: Event): void => {
    event?.preventDefault();

    const name = nameInput.value;
    const age = parseInt(ageInput.value);

    let newId: number;

    if (students.length > 0) {
        newId = Math.max(...students.map((student: Student) => student.id)) + 1;
    } else {
        newId = 1;
    }

    const newStudent: Student = {
        id: newId,
        name: name,
        age: age,
        // isActive: false,
    }

    students.push(newStudent);

    renderStudents(students);
}

studentForm.addEventListener("submit", addStudent);