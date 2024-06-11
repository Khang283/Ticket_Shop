const {
  UnknownException,
} = require("../exceptions/exceptions/unknown_exception");
const { Receipt, ReceiptDetail } = require("../db/models");
const { v4: uuidv4 } = require("uuid");
class BookingController {
  addNewReceipt = async (req, res, next) => {
    try {
      const date = new Date();
      const { customerId, total, ticketTypeId, amount } = req.body;
      const newReceipt = await Receipt.create({
        id: uuidv4(),
        date,
        customerId,
        total,
      });
      await newReceipt.save();
      
      const newReceiptDetail = await ReceiptDetail.create({
        id: uuidv4(),
        receiptId: newReceipt.id,
        ticketTypeId,
        total,
        amount,
      });
      await newReceiptDetail.save();
      return res.status(201).json(newReceiptDetail);
    } catch (error) {
      console.error("Error: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
}

module.exports = new BookingController();
