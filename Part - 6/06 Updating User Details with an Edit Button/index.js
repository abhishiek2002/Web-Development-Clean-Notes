document.addEventListener("DOMContentLoaded", initialize);

// Don't remove anything just complete the functions

// When the page get load display all users
function initialize() {
  const usersList = JSON.parse(localStorage.getItem("usersList")) || [];

  for (const user of usersList) {
    display(user);
  }

  sessionStorage.removeItem("editId");
}

// add new users in usersList array
function handleSubmit(event) {
  event.preventDefault();

  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  const userDetail = {username, email, phone};

  const editId = JSON.parse(sessionStorage.getItem("editId"));

  if (editId) {
    update(userDetail, editId);
  } else {
    add(userDetail);
  }

  event.target.username.value = "";
  event.target.email.value = "";
  event.target.phone.value = "";
  
}

// update data

function update(userDetail, editId){
    userDetail.id = editId;
    let usersList = JSON.parse(localStorage.getItem('usersList')) || [];

    for ( const index in usersList){
        
        if(usersList[index].id === editId){
            usersList[index].username = userDetail.username;
            usersList[index].email = userDetail.email;
            usersList[index].phone = userDetail.phone;
        }
    }

    localStorage.setItem('usersList', JSON.stringify(usersList));

    const li = document.getElementById(editId);

    li.firstChild.textContent = `${userDetail.username} ${userDetail.email} ${userDetail.phone}`;

    sessionStorage.removeItem('editId');
}

// add data to localstorage

function add(userDetail){
    userDetail.id = Date.now();

    let userList = JSON.parse(localStorage.getItem('usersList')) || [];

    userList.push(userDetail);

    localStorage.setItem('usersList', JSON.stringify(userList));

    display(userDetail);

}

// use this function to display user on screen
function display(user) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerHTML = `${user.username} ${user.email} ${user.phone} <button type="button" class="edit-btn" >Edit</button> <button type="button" class="delete-btn">Delete</button>`;
  li.setAttribute("id", user.id);

  const deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => deleteData(user.id));

  const editBtn = li.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => editData(user));

  ul.appendChild(li);
}

// use this function to delete the user details from local store and DOM (screen)
function deleteData(id) {
  let arr = JSON.parse(localStorage.getItem("usersList"));

  if (arr.length > 0) {
    arr = arr.filter((user) => user.id !== id);
  }

  localStorage.setItem("usersList", JSON.stringify(arr));

  const li = document.getElementById(String(id));
  li.remove();
}

// use this function to update user details from local storage
function editData(user) {
  const form = document.querySelector("form");

  form.username.value = user.username;
  form.email.value = user.email;
  form.phone.value = user.phone;

  // session storage
  sessionStorage.setItem("editId", user.id);
}

module.exports = handleSubmit
