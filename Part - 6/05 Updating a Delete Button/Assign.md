# Task: Updating a Delete Button



## Objective:

    Building upon the previous task where user details were stored and displayed, this task focuses on adding functionality to delete individual user entries. You will implement a delete button for each user displayed on the screen, enabling users to remove entries from both the displayed list and localStorage.


## Deliverables:

    Delete Button Implementation:
    Modify the display() function to include a "Delete" button within each displayed user's <li> element.
    Attach an event listener to the "Delete" button that triggers the deleteData() function when clicked.
    deleteData() Function:
    Implement the deleteData() function to remove the corresponding user's entry from localStorage and the DOM.
    The function should accept the unique user ID (generated in the handleSubmit function) and the corresponding <li> element as arguments.
    Upon deletion, the <li> element should be removed from the <ul>, and the user's data should be removed from the "usersList" array stored in localstorage.
    Data Persistence:
    Ensure that after deleting a user, the updated list of users is correctly stored in localStorage.
    The user id must be generated in the handleSubmit function, and used to delete the correct user.
    HTML Structure:
    The HTML structure from the previous task remains the same. Ensure the javascript properly utilizes the existing ul element.


## Hints:

    Use document.createElement() to create the "Delete" button.
    Use addEventListener() to attach a click event listener to the button.
    Use localStorage.getItem("usersList") and localStorage.setItem("usersList", JSON.stringify(updatedUsersList)) to manage the user data in localStorage.
    Use li.remove() to remove the li element from the dom.
    Use a normal for loop, iterate over the user array, and create a new array without the deleted user. then update the local storage with the new array.


## Resources:

Demo Video: [Link to Demo Video] (Watch this for a visual demonstration of the expected outcome.)

https://www.loom.com/share/0bcbdea63f994ec6b7383344a459f19a

Hint Video: (Watch it if you encounter difficulties.)


## Important Notes:

    Debugging: If errors occur, analyze them systematically and fix them.
    Data Consistency: Ensure that the data displayed on the screen always matches the data stored in localStorage.
    User IDs: Use the unique user ID to accurately identify and delete the correct user entry.


## Key Improvements:

    Clear and concise objective and deliverables.
    Specific instructions for implementing the delete functionality.
    Emphasis on data persistence and consistency.
    Helpful hints and important notes.