interface Student {
  firstName: string,
  lastName: string,
  age: Number,
  location: string
}

const std1: Student = {
  firstName: "Abdou",
  lastName: "Ouss",
  age: 26,
  location: "Khenifra"
}

const std2: Student = {
  firstName: "Hamid",
  lastName: "Tass",
  age: 27,
  location: "Rabat"
}

const studentsList: Array<Student> = [ std1, std2 ];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);

cell1Head.innerHTML = "firstName";
cell2Head.innerHTML = "location";
table.append(thead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

table.append(tbody);
body.append(table);
