import { connection as db } from "../Utils/ConnectToDatabase.js";

const createBusTable = async () => {
  try {
    await db.execute(`
        CREATE TABLE IF NOT EXISTS Buses (
            id INT AUTO_INCREMENT Primary Key,
            busNumber INT UNIQUE,
            totalSeats INT,
            availableSeats INT
        )
        `);
    console.log('Buses Table Created');
    
  } catch (error) {
    console.log("Error in creating Buses Table,", error);
  }
};

export default createBusTable;
