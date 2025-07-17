import List from "./Services/ExpenseList.js";

let count = 0;
document.addEventListener("DOMContentLoaded", async () => {
  sessionStorage.removeItem("editId");
  const res = await List.getExpenses();
  const expenses = res.data.data || [];

  for (const expense of expenses) {
    displaySingleElement(expense);
  }
});

async function display() {
  count = 0;
  const tbody = document.querySelector("#expenseList");

  //   getting expenses from database
  const res = await List.getExpenses();
  const expenses = res.data.data || [];

  //   updating HTML of table body to empty before displaying all expenses. So that expenses do not repeat.
  tbody.innerHTML = "";

  //   displaying expenses one by one
  for (const expense of expenses) {
    displaySingleElement(expense);
  }
}

function displaySingleElement(data) {
  // data = {id, amount, description, category}

  // selecting table body
  const tbody = document.querySelector("#expenseList");

  //   creating table row element
  const tr = document.createElement("tr");

  //   updating html of row element
  tr.innerHTML = `<td>${++count}</td>
                <td>${data.amount}</td>
                <td>${data.description}</td>
                <td>${data.category}</td>
                <td>
                    <button type="button" class="edit-btn">Edit</button>
                </td>
                <td>
                    <button type="button" class="delete-btn">Delete</button>
                </td>`;
  // adding id to row element
  tr.id = data.id;

  //   adding eventListener to both buttons in row element
  const deleteBtn = tr.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => deleteExpense(data.id));
  const editBtn = tr.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => editExpense(data));

  //   appending row element to table body
  tbody.appendChild(tr);
}

async function deleteExpense(id) {
  // selecting table row of same id
  const tr = document.getElementById(String(id));

  //   deleting expense from localStorage
  try {
    const res = await List.removeExpense(id);
    console.log(res);
    if (res) {
      //   removing table row from DOM
      // tr.remove();

      // again displaying all expenses to keep count also updated
      display();
    }
  } catch (error) {
    console.log("Error", error);
  }
}

function editExpense(data) {
  // changing values of form elements
  form.amount.value = data.amount;
  form.description.value = data.description;
  form.category.value = data.category;

  //   adding edit id to session storage in keep id known for further processing
  sessionStorage.setItem("editId", data.id);
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   getting value from form
  const amount = form.amount.value;
  const description = form.description.value;
  const category = form.category.value;

  //   if it is edited then getting it from session storage
  const editId = JSON.parse(sessionStorage.getItem("editId"));

  //   generating id for expense
  const id = editId;

  //   generating obj of data for expense
  const obj = { amount, description, category };

  //   if it is editing expense or not
  if (editId) {
    updateExpense(editId, obj);
    sessionStorage.removeItem("editId");
  } else {
    addExpense(obj);
  }

  // updating form field value to empty
  form.amount.value = null;
  form.description.value = "";
  form.category.value = "";
});

async function addExpense(data) {
  // add expense to database & display
  const res = await List.addExpense(data);
  const expense = res.data.data;
  
  displaySingleElement(expense);
}

async function updateExpense(id, data) {
  const tr = document.getElementById(String(id));
  const td = tr.querySelectorAll("td");

  //   update database
  try {
    const res = await List.editExpense(id, data);
    console.log(res);

    if (res) {
      //   only changing content so that count does not change
      td[1].textContent = data.amount;
      td[2].textContent = data.description;
      td[3].textContent = data.category;

      //  again adding event Listeners on both buttons with updated data
      const deleteBtn = tr.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", () => deleteExpense(id));
      const editBtn = tr.querySelector(".edit-btn");
      editBtn.addEventListener("click", () => editExpense({ ...data, id }));
    }
  } catch (error) {
    console.log(error);
  }
}
