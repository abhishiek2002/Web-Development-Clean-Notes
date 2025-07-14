import { connection as db } from "../Utils/ConnectToDatabase.js";

const createUserTable = async () => {
  try {
    await db.execute(`
    CREATE TABLE IF NOT EXISTS Users (
        id INT AUTO_INCREMENT Primary Key,
        name VARCHAR(50),
        email VARCHAR(100)
    )`);
    console.log('Users Table Created');
  } catch (error) {
    console.log("Error on creating Users Table,", error);
  }
};

export default createUserTable;
