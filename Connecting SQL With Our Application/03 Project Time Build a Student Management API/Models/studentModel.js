import db from "../Utils/db-connection.js";

const createStudentTable = async () => {
  try {
    await db.execute(`CREATE TABLE IF NOT EXISTS Students (
        id INT AUTO_INCREMENT Primary Key,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(100),
        age INT
        )`);

    console.log("Student Table has been created");
  } catch (error) {
    console.log("Error while creating student table");
  }
};

export default createStudentTable;
