# In this phase, we will transition from raw SQL queries to using Sequelize, a powerful ORM for Node.js, to interact with our database.

We will define Sequelize models for Users, Buses, Bookings, and Payments while focusing on basic CRUD operations without setting up associations yet.

By using Sequelize, we simplify database interactions and make our code more readable and maintainable.

## Deliverables

### 1. Define Sequelize Models

Create Sequelize models for the following entities:
Users
Buses
Bookings
Payments

### 2. Insert Data Using Sequelize

Use Sequelize’s create() method to insert sample data:
Add 3 users to the database.
Add 2 buses to the database.

### 3. Implement Sequelize Queries

Fetching Users:

    Use findAll() to retrieve all users from the database.
    Filtering Buses by Seat Availability:

    Use findAll() with a where condition to get all buses where available seats are greater than 10.

### 4. Implement API Endpoints and check on postman

User Endpoints:

    POST /users → Add a new user using Sequelize.
    GET /users → Retrieve all users from the database.

Bus Endpoints:

    POST /buses → Add a new bus using Sequelize.
    GET /buses/available/:seats → Retrieve all buses with available seats greater than the specified number.

## GitHub Submission

Once the tasks are successfully implemented:

    Push your code to GitHub.
    Save and submit your commit ID for reference.
