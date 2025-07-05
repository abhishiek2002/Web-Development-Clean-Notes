function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const obj = { username, email, phone };
    localStorage.setItem(email, JSON.stringify(obj));

    // ✅ Move this line inside the function so it's guaranteed to exist
    const ul = document.getElementsByTagName('ul')[0];

    const li = document.createElement('li');
    li.id = email;
    li.innerHTML = `${username} ${email} ${phone}  
    <button class="delete-btn">Delete</button>`;

    ul.appendChild(li);
}



document.addEventListener("DOMContentLoaded", () => {
    const ul = document.getElementsByTagName('ul')[0];

    // Render existing items from localStorage
    let len = localStorage.length;
    for (let i = 0; i < len; i++) {
        const key = localStorage.key(i);
        const data = JSON.parse(localStorage.getItem(key));

        const li = document.createElement('li');
        li.id = key;
        li.innerHTML = `${data.username} ${data.email} ${data.phone}  
            <button class="delete-btn">X</button>`;

        ul.appendChild(li);
    }

    // Handle delete
    ul.addEventListener('click', (event) => {
        if (event.target.classList.contains("delete-btn")) {
            const id = event.target.parentElement.id;
            localStorage.removeItem(id);
            event.target.parentElement.remove();
        }
    });
});

// ✅ Expose to HTML inline handler
window.handleFormSubmit = handleFormSubmit;

// ✅ Export for test cases
if (typeof module !== 'undefined') {
    module.exports = handleFormSubmit;
}
