"use strict";
const students = [
    { name: "Alice", age: 20, isActive: true },
    { name: "Bob", age: 21, isActive: false },
    { name: "Charlie", age: 22, isActive: true },
];
// --- Dom Elements --- //
const studentList = getElement("#student-tbody");
// --- Utility Functions --- //
function getElement(selector) {
    const el = document.querySelector(selector);
    if (!el) {
        throw new Error(`Element with selector "${selector}" not found.`);
    }
    return el;
}
// --- Render Functions --- //
function renderStudents(students) {
    studentList.innerHTML = students
        .map((student, i) => `
      <tr class="student-row">
        <td class="student-name">${student.name}</td>
        <td class="student-age">${student.age}</td>
        <td>
          <input type="checkbox" class="checkbox" data-index="${i}" ${student.isActive ? "checked" : ""}>
          <span>${student.isActive ? "Aktiv" : "Inaktiv"}</span>
        </td>
      </tr>
    `)
        .join("");
    const checkboxes = studentList.querySelectorAll(".checkbox");
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
            const target = event.target;
            const id = Number(target.dataset.index);
            students[id].isActive = target.checked;
            renderStudents(students);
        });
    });
}
// --- Initial Render --- //
renderStudents(students);
const studentForm = document.getElementById("new-student-form");
const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const addStudent = (event) => {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    const name = nameInput.value;
    const age = parseInt(ageInput.value);
    const newStudent = {
        name: name,
        age: age,
        isActive: false,
    };
    students.push(newStudent);
    nameInput.value = "";
    ageInput.value = "";
    nameInput.focus();
    renderStudents(students);
};
studentForm.addEventListener("submit", addStudent);
//# sourceMappingURL=main.js.map