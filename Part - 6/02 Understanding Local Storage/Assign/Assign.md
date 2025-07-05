Assignment: Local Storage Form

## Objective:

This assignment focuses on implementing basic local storage functionality in a web application. You will create an HTML form and write JavaScript code to store user input data in the

browser's local storage.



Watch the following two videos to understand local storage:

https://www.youtube.com/watch?v=lGmSZQwa3B4



## Deliverables:

    HTML:
    Create an HTML form with the following input fields and labels. Ensure the form includes an onsubmit attribute with the value handleFormSubmit(event).
    Username:
    Input type: "text"
    Name attribute: "username"
    Associated label: "Username"
    Email:
    Input type: "email"
    Name attribute: "email"
    Associated label: "Email"
    Phone:
    Input type: "tel"
    Name attribute: "phone"
    Associated label: "Phone"
    Button:
    Include a submit button within the form.
    button type: submit
    JavaScript:
    Form Submission Handling: Implement a JavaScript function (handleFormSubmit) to handle the form submission event.
    Within the function, retrieve the values entered by the user in the input fields using event.target.elements[fieldName].value.
    e.g. event.taget.username.value.


    Store the retrieved values in the browser's local storage with the following keys:
    "username"
    "email"
    "phone"


    Module Export: Export the handleFormSubmit function using module.exports = handleFormSubmit; to enable testing with Sharpener's compiler.


## Resources:

Demo Video: [Link to Demo Video] (Watch this for a visual demonstration of the expected outcome.)

https://www.loom.com/share/e681b0f349db41ec844299c43a199786

Watch this video if you encounter errors: How to debug on sharpener compiler

https://www.loom.com/share/c3c544de45c8470da5a12c5214889b56

Hint Video: Watch it if you encounter difficulties.


## GitHub Repository:

Create a new GitHub repository and push your HTML and JavaScript files to it.

Past the comment ID here.


## Additional Learning:

In your free time, explore the differences and use cases for JavaScript Cookies vs Local Storage vs Session Storage

https://www.youtube.com/watch?v=GihQAC1I39Q