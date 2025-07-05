# Assignment: Local Storage How to handle multiple users



## Objective:

This assignment expands upon the previous task, which focused on storing a single user's information in local storage. You will now modify your code to store and manage multiple user entries.



## Previous Task Recap:

You created an HTML form with fields for username, email, and phone number.

You implemented a JavaScript function (handleFormSubmit) to:

Retrieve user input values from the form.

Store these values individually in local storage using specific keys ("Username", "Email", "Phone").



## Current Task:

User Object: Represent each user as an object with the following properties:

{

"username": username

"email": email

"phone": phone

}



## Storage Mechanism:

Use the user's email address as the unique key for storing each user object in local storage.

Utilize JSON.stringify() to convert the user objects to strings before storing them in local storage.

## Retrieve and Display:

Implement a function (e.g., getUsersFromLocalStorage()) to retrieve all stored users from local storage.

Create an unordered list (<ul>) in your HTML to dynamically display the retrieved user information.

For each stored user, create a list item (<li>) and append it to the <ul>. Each list item should display relevant user information (e.g., "Username: John Doe, Email: [email address removed], Phone: 123-456-7890").



## Deliverables:

### Updated JavaScript:

    Implement the handleFormSubmit function to store user data as objects in local storage using the email address as the key.

    Implement the getUsersFromLocalStorage() function to retrieve all stored users.

    Implement the logic to dynamically create and populate the user list on the page.

### Testing:

    Test your implementation by submitting multiple user entries through the form.

    Refresh the page to verify that the stored data persists.

    Check the browser's developer console to inspect the stored data in local storage.



Utilize DOM manipulation techniques (e.g., createElement(), appendChild()) to create and append list items to the HTML document.



## Resources:

Refer to the JavaScript documentation for information on working with local storage (localStorage), JSON.stringify(), and JSON.parse().

Mastering JSON.parse() and JSON.stringify() for Efficient JSON Data Conversion and Manipulation | by Gec | Medium

https://medium.com/@gecno/mastering-json-parse-and-json-stringify-for-efficient-json-data-conversion-and-manipulation-955ef1105230

Demo Video: [Link to Demo Video] (Watch this for a visual demonstration of the expected outcome.)

https://www.loom.com/share/42ddb94a101d4ee4a0f56a90651a6786


Watch this video if you encounter errors: How to debug on sharpener compiler

https://www.loom.com/share/c3c544de45c8470da5a12c5214889b56


if stuck for long watch the hit video.



Push the code to the Github repo which you had created in that last assignment.