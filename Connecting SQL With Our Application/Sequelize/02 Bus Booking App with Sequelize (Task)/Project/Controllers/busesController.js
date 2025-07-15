import { Op } from "sequelize";
import bus from "../Models/BusModel.js";

async function getBuses(req, res) {
  const { seats } = req.params;
  try {
    const buses = seats
      ? await bus.findAll({
          where: {
            availableSeats: {
              [Op.gte]: seats,
            },
          },
        })
      : await bus.findAll();

    res.status(200).json({
      success: true,
      message:
        buses.length === 0 ? `no bus found` : `${buses.length} buses found`,
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
    const data = await bus.create({ busNumber, totalSeats, availableSeats });

    res.status(200).json({
      success: true,
      data: data,
      message: `Bus is added successfully`,
    });
  } catch (error) {
    console.log("Error while adding bus:-", error.errors[0].message);
    res.status(502).json({
      success: false,
      message: error.errors[0].message,
    });
  }
}

export { getBuses, addBus };
