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
    if (!el)
        throw new Error(`Element with selector "${selector}" not found.`);
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
  
    const checkboxes = studentList.querySelectorAll<HTMLInputElement>(".checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", (event) => {
        const target = event.target;
        const id = Number(target.dataset.index);
        students[id].isActive = target.checked;
        renderStudents(students);
      }
    })
}
// --- Initial Render --- //
renderStudents(students);
