interface Student {
  name: string;
  age: number;
  isActive: boolean;
}

const students = [
  { name: "Alice", age: 20, isActive: true },
  { name: "Bob", age: 21, isActive: false },
  { name: "Charlie", age: 22, isActive: true },
];
// --- Dom Elements --- //
const studentList = getElement("#student-tbody");
// --- Utility Functions --- //
function getElement<T extends HTMLElement>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) {
    throw new Error(`Element with selector "${selector}" not found.`);
  }
  return el;
}
// --- Render Functions --- //
function renderStudents(students: Student[]) {
  studentList.innerHTML = students
    .map(
      (student, i) => `
      <tr class="student-row">
        <td class="student-name">${student.name}</td>
        <td class="student-age">${student.age}</td>
        <td>
          <input type="checkbox" class="checkbox" data-index="${i}" ${
        student.isActive ? "checked" : ""
      }>
          <span>${student.isActive ? "Aktiv" : "Inaktiv"}</span>
        </td>
      </tr>
    `
    )
    .join("");

  const checkboxes =
    studentList.querySelectorAll<HTMLInputElement>(".checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event: Event) => {
      const target = event.target as HTMLInputElement;
      const id = Number(target.dataset.index);
      students[id].isActive = target.checked;
      renderStudents(students);
    });
  });
}
// --- Initial Render --- //
renderStudents(students);
