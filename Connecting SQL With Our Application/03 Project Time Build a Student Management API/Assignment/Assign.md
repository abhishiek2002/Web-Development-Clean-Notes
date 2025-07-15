# It's time to put your SQL skills into practice.

Create an Express API that interacts with a MySQL database using the mysql2 package.

The API should allow users to insert, update, retrieve, and delete student records using raw SQL queries.

## Deliverables:

1. Setup & Database Creation

    Initialize an Express project and configure MySQL.
    Create a students table with the following columns:
    id (Primary Key, Auto Increment)
    name (VARCHAR)
    email (VARCHAR, Unique)
    age (INT)

2. Implement API Endpoints

    POST /students → Insert a new student.
    GET /students → Retrieve all students.
    GET /students/:id → Retrieve a student by ID.
    PUT /students/:id → Update student details.
    DELETE /students/:id → Delete a student by ID.

3. Perform the following operations:

    Insertion: Add two students to the database:
    Name: "MS Dhoni"
    Email: "dhoni@example.com"
    Age: 42
    Name: "Virat Kohli"
    Email: "virat.kohli@example.com"
    Age: 35

    Updating: Modify the first entry (MS Dhoni) as follows:
    Name: "Captain Cool"
    Email: "captaincool@example.com"

    Deletion:
    Delete the second student (Virat Kohli) from the database.
    Verify the deletion by fetching all students.

## Additional Requirements:

    Ensure proper error handling (e.g., trying to update/delete a non-existent student).
    Log all database operations (Insert, Update, Delete) in the console for debugging.
    Manage database connections efficiently to prevent memory leaks.

## Submission Instructions:

After completing the project, push your code to a GitHub repository and share the commit ID for review.
