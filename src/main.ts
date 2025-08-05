// --- Interfaces --- //
interface Student {
  id: number;
  name: string;
  age: number;
}

// --- Data --- //
const students: Student[] = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 21 },
  { id: 3, name: "Charlie", age: 22 },
];

// --- Dom Elements --- //
const studentList = getElement<HTMLTableSectionElement>("#student-tbody");

// --- Utility Functions --- //
function getElement<T extends HTMLElement>(selector: string): T {
  const el = document.querySelector(selector);
  if (!el) throw new Error(`Element with selector "${selector}" not found.`);
  return el as T;
}

// --- Render Functions --- //
function renderStudents(students: Student[]): void {
  studentList.innerHTML = students
    .map(
      (student) => `
        <tr class="student-row">
          <td class="student-name">${student.name}</td>
          <td class="student-age">${student.age}</td>
        </tr>
      `
    )
    .join("");
}

// --- Initial Render --- //
renderStudents(students);
