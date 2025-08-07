"use strict";
// --- Data --- //
const students = [
    { name: "Alice", age: 20, isActive: true },
    { name: "Bob", age: 21, isActive: false },
    { name: "Charlie", age: 22, isActive: true },
];
// --- Dom Elements --- //
const studentList = getElement("#student-tbody");
const studentForm = getElement("#new-student-form");
const nameInput = getElement("#name-input");
const ageInput = getElement("#age-input");
// --- Utility Functions --- //
function getElement(selector) {
    const el = document.querySelector(selector);
    if (!el)
        throw new Error(`Element with selector "${selector}" not found.`);
    return el;
}
// --- Render Functions --- //
function renderStudents(students) {
    studentList.innerHTML = students
        .map(({ name, age, isActive }, i) => `
      <tr class="student-row">
        <td class="student-name">${name}</td>
        <td class="student-age">${age}</td>
        <td>
          <input type="checkbox" class="checkbox" data-index="${i}" ${isActive ? "checked" : ""}>
          <span>${isActive ? "Aktiv" : "Inaktiv"}</span>
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
// --- Event handlers --- //
function handleAddStudent(event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);
    if (!name || isNaN(age))
        return;
    students.push({ name, age, isActive: false });
    nameInput.value = "";
    ageInput.value = "";
    nameInput.focus();
    renderStudents(students);
}
// --- Init --- //
renderStudents(students);
studentForm.addEventListener("submit", handleAddStudent);
//# sourceMappingURL=main.js.map