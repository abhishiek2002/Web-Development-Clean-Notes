import user from "./BackEnd API/usersServices.js";

window.addEventListener("DOMContentLoaded", async () => {
  sessionStorage.removeItem("editID");
  const res = await user.getUsers();
  const users = res.data || [];

  for (const userData of users) {
    display(userData);
  }
});

function display({ id, name, email }) {
  const tbody = document.querySelector("tbody");
  const tr = document.createElement("tr");

  tr.innerHTML = `
          <td>${name}</td>
          <td>${email}</td>
          <td>
            <button type="button" class="edit-btn">Edit</button>
          </td>
          <td>
            <button type="button" class="delete-btn">Remove</button>
          </td>`;

  tr.id = id;
  const deleteBtn = tr.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", (event) => deleteBtnHandler(id));
  const editBtn = tr.querySelector(".edit-btn");
  editBtn.addEventListener("click", (event) =>
    editBtnHandler({ id, name, email })
  );

  tbody.appendChild(tr);
}

async function deleteBtnHandler(id) {
  const parentEl = document.getElementById(String(id));

  try {
    const res = await user.deleteUser(id);

    if (res.data.success) {
      parentEl.remove();
      //   popMessage("User Removed Successfully", "green");
    }
  } catch (error) {
    console.log("Error while removing user", error);
    // popMessage("Try Again Later", "red");
  }
}

async function editBtnHandler({ id, name, email }) {
  const form = document.querySelector("#userForm");

  form.name.value = name;
  form.email.value = email;

  sessionStorage.setItem("editID", id);

  const parentEl = document.getElementById(String(id));
  parentEl.remove();
}

const form = document.querySelector("#userForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  let name = event.target.name.value;
  let email = event.target.email.value;
  const id = JSON.parse(sessionStorage.getItem("editID"));

  if (name === "") name = undefined;
  if (email === "") email = undefined;

  let data;

  try {
    if (id) {
      const res = await user.editUser({ name, email, id });
      data = res.data.data;
      sessionStorage.removeItem("editID");
    } else {
      const res = await user.addUser({ name, email });
      data = res.data.data;
    }

    if (data) {
      display({ id: data.id, name: data.name, email: data.email });
    }
  } catch (error) {
    console.log("Error while adding user", error);
  }

  //   popMessage("Try ", "red");

  event.target.name.value = "";
  event.target.email.value = "";
});
