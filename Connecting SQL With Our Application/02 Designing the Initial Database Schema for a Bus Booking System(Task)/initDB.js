import createBookingTable from "./Models/BookingModel.js";
import createBusTable from "./Models/BusModel.js";
import createPaymentTable from "./Models/PaymentModel.js";
import createUserTable from "./Models/UserModel.js";

async function intializeDatabase() {
    await createUserTable();
    await createBusTable();
    await createBookingTable();
    await createPaymentTable();
}

export default intializeDatabase;