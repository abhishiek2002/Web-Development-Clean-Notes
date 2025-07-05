# Task: Updating User Details with an Edit Button



## Objective:

    Building upon the previous tasks where user details were stored, displayed, and deleted, this task focuses on adding functionality to edit existing user entries. You will implement an "Edit" button for each user displayed on the screen, enabling users to modify and update their information in both the displayed list and localStorage.



## Deliverables:

    Edit Button Implementation:
    Modify the display() function to include an "Edit" button within each displayed user's <li> element, alongside the "Delete" button.
    Attach an event listener to the "Edit" button that triggers the edit() function when clicked.
    edit() Function:
    Implement the edit() function to populate the form fields with the selected user's data.
    Store the user's ID in sessionStorage to track which user is being edited.
    update() Function:
    Implement the update() function to modify the corresponding user's entry in localStorage and the DOM.
    The function should retrieve the user's ID from sessionStorage and update the user's details.
    After updating, remove the editId from sessionStorage.
    Update the li element text content.
    Form Submission Handling:
    Modify the handleSubmit() function to differentiate between adding a new user and updating an existing user based on the presence of an editId in sessionStorage.
    If an editId exists, call the update() function; otherwise, call the add() function.
    Data Persistence:
    Ensure that after editing a user, the updated list of users is correctly stored in localStorage.
    HTML Structure:
    The HTML structure from the previous task remains the same. Ensure the javascript properly utilizes the existing ul element.


## Hints:

    Use document.createElement() to create the "Edit" button.
    Use addEventListener() to attach click event listeners to both "Delete" and "Edit" buttons.
    Use sessionStorage.setItem() and sessionStorage.getItem() to manage the editId.
    Use localStorage.getItem("usersList") and localStorage.setItem("usersList", JSON.stringify(updatedUsersList)) to manage the user data in localStorage.
    Use the user ID to accurately identify and update the correct user entry.
    use li.firstChild.textContent to update only the text content of the li element.


## Resources:

Demo Video: [Link to Demo Video] (Watch this for a visual demonstration of the expected outcome.)

https://www.loom.com/share/087b06d338064ef4983a0dae54e50918

Hint Video: [Link to Hint Video] (Watch it if you encounter difficulties.)

https://www.loom.com/share/abdeddb35e444ef6aed58eeb986829d9


## Important Notes:

    Debugging: If errors occur, analyze them systematically and fix them.
    Data Consistency: Ensure that the data displayed on the screen always matches the data stored in localStorage.
    User IDs: Use the unique user ID to accurately identify and update the correct user entry.
    sessionStorage: Use sessionStorage to store the id of the element that is being edited.