import { Booking, Bus, User } from "../Models/index.js";

async function bookSeat(req, res) {
  const { userId, busId, seatNumber } = req.body;
  try {
    const book = await Booking.create({ seatNumber });

    const user = await User.findByPk(userId);
    const bus = await Bus.findByPk(busId);

    await user.addBooking(book);
    await bus.addBooking(book);


    const updatedBook = await Booking.findByPk(book.id, {include: [User, Bus]});

    res.status(200).json({
      success: true,
      message: "Booking is confirmed",
      data: updatedBook,
    });
  } catch (error) {
    console.log("Error while booking seat", error.message);
    res.status(502).json({
      success: false,
      message: error.message,
    });
  }
}

export { bookSeat };
