// --- Data --- //
export const students = [
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
export function renderStudents(students) {
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
//# sourceMappingURL=main.js.map