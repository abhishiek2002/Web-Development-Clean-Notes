# Now we are going to host our Expense tracker project on AWS.

Watch video 1 to 3 from the [following link](https://drive.google.com/drive/folders/1bJ48GzzobuJ9vi-73BHam1El80-8phM0?usp=share_link) and answer the following [Code along with the trainer.]

### What are environment variables and what should we use it for?

### What all thing should you do to prepare code for production?

### Explain each one of them and why we need it?

### Watch video 4 from the above link and answer the following [Code along with the trainer.]

1. Download the resource attached in the task

2. Understand that he is using a different code base which you have not worked on but understand the core fundamentals. They are the same.

3. Why should we put the port number and the database connection string in env variable?

4. What is process variable? What does process.env do?

### Watch video 6 and understand how to may your application more secure?

1. What are the key security things which helmet provides. Can you explain a few?

### Watch video 7 and 8 and answer the following [Code along with the trainer.]

1. Using console log for logging can make your application very slow.

2. How does the udemy trainer configure morgan? Can you explain the flow and what logs will morgan provide

## Deliverable:

1. Prepare your expense tracker app for deployment.

2. Move all the API keys and other hard coded values to env file like Nodemailer and Razororpay API key, DB connection port, password etc.

3. Compressing the asset is not required in expense tracker as it is not server side rendered.

4. Integrate error logging in the expense tracker app. Write all the logs to a file.

## Avoid Helmet for Now:

- Helmet enforces HTTPS connections.

- Without a domain name, your local development environment will likely encounter issues as HTTPS requires a secure connection that cannot be established locally without proper certificates.

- Consider alternative security measures for your development environment and revisit Helmet integration when you have a domain name and are ready for deployment.

```
Push the code to git and upload commit ID
```



