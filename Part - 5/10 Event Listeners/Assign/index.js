const fruit = document.getElementsByClassName("fruit");
const inputEl = document.querySelector("#fruit-to-add");
const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

for (const x of fruit) {
    const btn = document.createElement("button");

    btn.textContent = "Edit";
    btn.classList.add("edit-btn");
    x.appendChild(btn);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    var val = inputEl.value;

    const li = document.createElement("li");
    li.classList.add('fruit');

    li.innerHTML = `${val}<button class="delete-btn">x</button><button class="edit-btn">Edit</button>`;

    fruits.appendChild(li);
});

const deleteBtn = document.querySelector(".delete-btn");

fruits.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const liToDelete = e.target.parentElement;
        liToDelete.remove();
    }

    if (e.target.classList.contains("edit-btn")) {
        const li = e.target.parentElement;
        const fruitText = li.firstChild.textContent.trim();
        inputEl.value = fruitText;
        li.remove();
    }
});
