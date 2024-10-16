interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
  firstName: "Tunde",
  lastName: "Onakoya",
  age: 29,
  location: "Lagos",
}

const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 100,
  location: "Accra",
}

const studentsList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement =  document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const firstCellHead: HTMLTableCellElement = rowHead.insertCell(0);
const secondCellHead: HTMLTableCellElement = rowHead.insertCell(1);

firstCellHead.innerHTML = "firstName";
secondCellHead.innerHTML = "location";
table.append(thead);

studentsList.forEach((student) => {
  const rowBody: HTMLTableRowElement = tbody.insertRow();

  const firstCellBody: HTMLTableCellElement = rowBody.insertCell(0);
  const secondCellBody: HTMLTableCellElement = rowBody.insertCell(1);

  firstCellBody.innerHTML = "student.firstName";
  secondCellBody.innerHTML = "student.location";
});

table.append(tbody);
body.append(table);
