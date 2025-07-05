document.addEventListener("DOMContentLoaded", initialize);

// When the page loads, display all users and attach delete listener
function initialize() {
    display();
    deleteData();
}

// Add new users to usersList array in localStorage
function handleFormSubmit(event) {
    event.preventDefault();

    const id = Date.now(); // id as number
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const obj = { username, email, phone, id };

    let arr = JSON.parse(localStorage.getItem("usersList")) || [];
    arr.push(obj);

    localStorage.setItem("usersList", JSON.stringify(arr));

    display();
}

// Display users on screen
function display() {
    const ul = document.querySelector("ul");
    ul.innerHTML = "";

    const arr = JSON.parse(localStorage.getItem("usersList")) || [];

    for (const user of arr) {
        const li = document.createElement("li");
        li.innerHTML = `${user.username} ${user.email} ${user.phone} 
      <button class="delete-btn">Delete</button>`;

        li.setAttribute("data-id", user.id); // ✅ safer than using id
        ul.appendChild(li);
    }
}

// Delete user from screen and localStorage
function deleteData() {
    const ul = document.querySelector("ul");

    ul.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-btn")) {
            const parent = event.target.parentElement;
            const idToDelete = parent.getAttribute("data-id"); // string

            let arr = JSON.parse(localStorage.getItem("usersList")) || [];

            // 🔥 convert both to string to safely compare
            arr = arr.filter((user) => String(user.id) !== idToDelete);

            localStorage.setItem("usersList", JSON.stringify(arr));
            parent.remove(); // ✅ remove from DOM
        }
    });
}

if (typeof module !== "undefined") {
    module.exports = handleFormSubmit;
}
