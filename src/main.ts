// --- Interfaces --- //
export interface Student {
  id: number;
  name: string;
  age: number;
  // isActive: boolean;
}

// --- Data --- //
export const students: Student[] = [
  { id: 1, name: "Alice", age: 20},
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
export function renderStudents(students: Student[]): void {
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

    nameInput.value = "";
    ageInput.value = "";

    nameInput.focus();

    renderStudents(students);
}

studentForm.addEventListener("submit", addStudent);