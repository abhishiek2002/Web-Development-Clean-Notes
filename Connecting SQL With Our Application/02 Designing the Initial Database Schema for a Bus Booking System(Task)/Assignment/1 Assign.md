Imagine you are building a Bus Booking System where users can book seats on buses, and payments are processed for these bookings.

Before we can start implementing the core functionalities, we need to set up the database tables that will store our data.

Right now , your task is to design and create the basic database schema by writing SQL queries to create the necessary tables.

For now, we will keep things simple.

## Task:
Write SQL queries to create the following tables:

    Users Table:
    This table should store user information.
    Columns: id, name, email
    Buses Table:
    This table will store information about available buses.
    Columns: id, busNumber, totalSeats, availableSeats
    Bookings Table:
    This table will store seat bookings.
    Columns: id, seatNumber
    Payments Table:
    This table will store payment information.
    Columns: id, amountPaid, paymentStatus

## Instructions:

    Write SQL CREATE TABLE queries for each of the tables.
    Use appropriate data types for each column (e.g., INT for IDs, VARCHAR for text, etc.).
    Ensure the id column in each table serves as a primary key.


    💡 Hint: If you're unsure about the data types, consider using AUTO_INCREMENT for IDs and VARCHAR(255) for text fields.
