import { Op } from "sequelize";
import { Bus, Booking, User } from "../Models/index.js";

async function getBuses(req, res) {
  const { seats } = req.params;
  try {
    const buses = seats
      ? await Bus.findAll({
          where: {
            availableSeats: {
              [Op.gte]: seats,
            },
          },
        })
      : await Bus.findAll();

    res.status(200).json({
      success: true,
      message:
        buses.length === 0 ? `no Bus found` : `${buses.length} buses found`,
      data: buses,
    });
  } catch (error) {
    console.log("Error while fetching buses data", error);
    res.status(502).json({
      success: false,
      message: "Error while fetching buses data",
    });
  }
}

async function addBus(req, res) {
  const { busNumber, totalSeats, availableSeats } = req.body;
  try {
    const data = await Bus.create({ busNumber, totalSeats, availableSeats });

    res.status(200).json({
      success: true,
      data: data,
      message: `Bus is added successfully`,
    });
  } catch (error) {
    console.log("Error while adding Bus:-", error.errors[0].message);
    res.status(502).json({
      success: false,
      message: error.errors[0].message,
    });
  }
}

async function getBusesBookings(req, res) {
  const { id } = req.params;
  try {
    const bookings = await Booking.findAll({
      where: {
        BusId: id,
      },
      include: User,
    });
    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.log(error);
  }
}

export { getBuses, addBus, getBusesBookings };
