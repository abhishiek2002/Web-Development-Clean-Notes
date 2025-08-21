import databaseServiceInstance from "./Services/DatabaseServices.js";

// on load display tables name -------------------
window.addEventListener("DOMContentLoaded", async () => {
  const res = (await databaseServiceInstance.getTablesName()) || [];
  const resData = res.data.data;

  const tableNames = resData
    .map((nameObj) => Object.values(nameObj)[0])
    .reverse();

  for (const name of tableNames) {
    displayTableName(name);
  }
});

// display table name in DOM , take the name of the table
function displayTableName(name) {
  const tableWindow = document.getElementById("tableWindow");
  // console.log(tableWindow);
  const div = document.createElement("div");

  div.innerHTML = `<h3 class="tableName">${name}</h3>
        <hr />`;

  div.addEventListener("click", () => handleTableClick(name));

  tableWindow.appendChild(div);
}

// show data table and update attribute of insertRecord btn on click upon any table name in DOM
async function handleTableClick(name) {
  const insertBtnId = document.getElementById("insertBtnId");
  // console.log(insertBtnId);

  insertBtnId.setAttribute("tableName", name);

  const recordForm = document.querySelector(".recordForm");

  recordForm.setAttribute("tableName", name);

  try {
    const res = await databaseServiceInstance.getRows(name);
    const data = res.data.data;
    displayTableData(data);
  } catch (error) {
    console.log(error);
  }
}

// this function get the whole table data and display it
async function displayTableData(data) {
  // data is array of rows or either empty array

  const dataWindow = document.querySelector(".dataWindow");
  //  console.log(dataWindow);

  // display column name
  const tr = dataWindow.querySelector("#columnNames");
  // first empty previous table column names
  tr.innerHTML = "";

  await dispalyColumnNames(tr);

  // display rows of table

  const tbody = dataWindow.querySelector("tbody");
  // first empty previous table data
  tbody.innerHTML = "";

  displayTableRows(data, tbody);
}

// this function display columns of the table before displaying data and take the DOM element as input in which columns need to render
async function dispalyColumnNames(tr) {
  // here tr is the table head row element, and columns is array of column names

  // console.log(columns, tr);
  console.log('inside dispalyColumnNames');

  const insertBtnId = document.getElementById("insertBtnId");
  // console.log(insertBtnId);

  const tableName = insertBtnId.getAttribute("tableName");
  

  try {
    const res = await databaseServiceInstance.getColumnsName(tableName);
    const columnObjArray = res.data.data;

    let columns = columnObjArray.map(
      (obj) => obj.COLUMN_NAME || obj.column_name
    );

    console.log(columns);

    for (const column of columns) {
      if (column === "id") {
        continue;
      }
      const td = document.createElement("td");
      td.innerText = column.toUpperCase();

      tr.appendChild(td);
    }
  } catch (error) {
    console.log(error);
  } finally {
    // one more time append td to tr because of delete btn
    const td = document.createElement("td");
    tr.appendChild(td);
  }
}

// this function display a single row in the table at a time
function displayTableRows(data, tbody) {
  // here data is array of table rows, and tbody is the table body element in which rows need to append

  // console.log(data, tbody);

  for (const row of data) {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(row)) {
      if (key === "id") {
        tr.id = value;
        continue;
      }

      const td = document.createElement("td");
      td.innerText = value;
      tr.appendChild(td);
    }

    // one more time append td to tr for delete btn

    const td = document.createElement("td");
    td.innerHTML = `<button class="deleteRowBtn">Delete</button>`;

    td.addEventListener("click", () => deleteRecord(row.id));
    tr.appendChild(td);

    // now append tr to tbody

    tbody.appendChild(tr);
  }
}

async function deleteRecord(id) {
  // it take id of row

  const insertBtnId = document.getElementById("insertBtnId");
  const tableName = insertBtnId.getAttribute("tableName");

  let tr = document.getElementById(String(id));

  try {
    await databaseServiceInstance.deleteRow(tableName, id);
    tr.remove();
  } catch (error) {
    console.log(error);
  }
}

// insert Record button

const insertBtnId = document.getElementById("insertBtnId");
insertBtnId.addEventListener("click", (event) => handleInsertBtnClick(event));

async function handleInsertBtnClick(event) {
  const insertRecord = document.getElementById("insertRecord");
  insertRecord.classList.toggle("visible");

  // console.log(event.target);

  const tableName = event.target.getAttribute("tableName");

  // get columns name

  try {
    const res = await databaseServiceInstance.getColumnsName(tableName);
    const columnObjArray = res.data.data;

    let columns = columnObjArray.map(
      (obj) => obj.COLUMN_NAME || obj.column_name
    );

    // remove id, createdAt and updatedAt columns

    columns = columns.filter(
      (col) => col !== "createdAt" && col !== "updatedAt" && col !== "id"
    );

    // render form to insert row
    renderInsertForm(columns);
  } catch (error) {
    console.log(error);
  }
}

// this function edit innerHTML of insert Form

function renderInsertForm(columns) {
  const recordForm = document.querySelector(".recordForm");
  recordForm.innerHTML = "";

  // console.log(recordForm);

  `<input type="text" name="" id="" placeholder="name">`;

  for (const column of columns) {
    const input = document.createElement("input");

    input.placeholder = column;
    input.name = column;

    recordForm.appendChild(input);
  }

  // add submit button also

  const button = document.createElement("button");
  button.type = "submit";
  button.innerText = "Insert Record";
  button.className = "insertBtn";

  recordForm.appendChild(button);
}

const recordForm = document.querySelector(".recordForm");

recordForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(recordForm);

  const urlEncodedData = new URLSearchParams(formData);

  const tableName = recordForm.getAttribute("tableName");

  try {
    const res = await databaseServiceInstance.insertRow(
      tableName,
      urlEncodedData
    );
    const rowData = res.data.data;
    console.log(rowData);

    const tbody = document.querySelector("tbody");

    displayTableRows([rowData], tbody);
  } catch (error) {
    console.log(error);
  } finally {
    const insertRecord = document.getElementById("insertRecord");
    insertRecord.classList.toggle("visible");
  }
});

// create table handler ----------------------------------

const tableBtn = document.querySelector(".tableBtn");

tableBtn.addEventListener("click", () => {
  const createTableWindow = document.getElementById("createTable");
  createTableWindow.classList.toggle("visible");
});

const addFieldBtn = document.getElementById("addFieldBtn");
addFieldBtn.addEventListener("click", () => {
  const fieldsContainer = document.getElementById("fieldsContainer");

  const fieldRow = document.createElement("div");
  fieldRow.className = "fieldRow";

  fieldRow.innerHTML = `<input type="text" name="fieldName[]"/>
              <select name="fieldType[]">
                <option value="STRING">STRING</option>
                <option value="NUMBER">NUMBER</option>
                <option value="BOOLEAN">BOOLEAN</option>
                <option value="JSON">JSON</option>
                <option value="DOUBLE">DOUBLE</option>
              </select>
              <button type="button" class="removeRowBtn">Remove</button>
              `;

  const removeRowBtn = fieldRow.querySelector(".removeRowBtn");
  removeRowBtn.addEventListener("click", () => fieldRow.remove());
  fieldsContainer.appendChild(fieldRow);
});

const databaseTableCreationForm = document.querySelector(
  "#databaseTableCreationForm"
);
databaseTableCreationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const tableName = event.target.name.value;
  // let fieldNames = [];
  // let fieldType = [];
  let obj = {};

  const rows = document.querySelectorAll(".fieldRow");

  rows.forEach((row) => {
    const input = row.querySelector("input");
    const select = row.querySelector("select");

    // fieldNames.push(input.value);
    // fieldType.push(select.value);

    obj[input.value] = select.value;
  });

  // create obj by combine both fieldNames & fieldType
  console.log(obj);

  try {
    const res = await databaseServiceInstance.createTable(tableName, obj);
    console.log(res);

    // add it to the tables name list
    displayTableName(tableName);
    displayTableData([]);
  } catch (error) {
    console.log(error);
  }

  databaseTableCreationForm.parentElement.classList.toggle("visible");
});

// removeWindowBtn -----------------------
