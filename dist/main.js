"use strict";
const students = [
    { name: "Alice", isActive: true },
    { name: "Bob", isActive: false },
    { name: "Charlie", isActive: true },
];
const studentListDiv = document.getElementById("student-list");
function renderStudents() {
    studentListDiv.innerHTML = "";
    const studentList = document.createElement("ul");
    // Utgår från den hårdkodade listan av studenter, eftersom detta usercase inte täcker upp addering eller borttagning av studenter 
    students.forEach(student => {
        const listItem = document.createElement("li");
        // Visa studentens namn
        listItem.classList.add("student-item");
        const nameSpan = document.createElement("span");
        nameSpan.textContent = student.name + ", ";
        listItem.appendChild(nameSpan);
        // Visa studentens status
        const statusSpan = document.createElement("span");
        if (student.isActive)
            statusSpan.textContent = "Aktiv";
        else
            statusSpan.textContent = "Inaktiv";
        listItem.appendChild(statusSpan);
        // Lägg till checkbox-elementet
        const statusCheckbox = document.createElement("input");
        statusCheckbox.type = "checkbox";
        statusCheckbox.checked = student.isActive;
        statusCheckbox.addEventListener("change", () => {
            student.isActive = !student.isActive;
            renderStudents();
        });
        listItem.appendChild(statusCheckbox);
        studentList.appendChild(listItem);
    });
    studentListDiv.appendChild(studentList);
}
renderStudents();
//# sourceMappingURL=main.js.map