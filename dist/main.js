"use strict";
// --- Data --- //
const students = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 21 },
    { id: 3, name: "Charlie", age: 22 },
];
// --- Dom Elements --- //
const studentList = getElement("#student-tbody");
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
        .map((student) => `
        <tr class="student-row">
          <td class="student-name">${student.name}</td>
          <td class="student-age">${student.age}</td>
        </tr>
      `)
        .join("");
}
// --- Initial Render --- //
renderStudents(students);
//# sourceMappingURL=main.js.map