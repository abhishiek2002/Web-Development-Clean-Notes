import { connection as db } from "../Utils/ConnectToDatabase.js";

const createBookingTable = async () => {
  try {
    await db.execute(`
        CREATE TABLE IF NOT EXISTS Bookings (
            id INT Primary Key,
            seatNumber INT
        )
        `);
    console.log('Bookings Table Created');
  } catch (error) {
    console.log("Error on creating Bookings Table,", error);
  }
};

export default createBookingTable;
