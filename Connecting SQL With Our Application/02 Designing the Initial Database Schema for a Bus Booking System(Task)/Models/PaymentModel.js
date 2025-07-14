import { connection as db } from "../Utils/ConnectToDatabase.js";

const createPaymentTable = async () => {
  try {
    await db.execute(`
        CREATE TABLE IF NOT EXISTS Payments (
            id INT Primary Key,
            amountPaid INT,
            paymentStatus INT
        )
        `);
    console.log('Payments Table Created');
  } catch (error) {
    console.log("Error on creating Payments Table,", error);
  }
};

export default createPaymentTable;
