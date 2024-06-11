const {
  UnknownException,
} = require("../exceptions/exceptions/unknown_exception");
const { Receipt, ReceiptDetail, TicketType } = require("../db/models");
const { v4: uuidv4 } = require("uuid");
class BookingController {
  getReceiptById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const receiptDetail = await ReceiptDetail.findByPk(id, {
        include: [{
          model: TicketType,
          as: "ticketType",
          attributes: ["id", "name", "price"],
        },
        {
          model: Receipt,
          as: "receipt",
          attributes: ["id", "date"],
        }]
      });
      if (!receiptDetail) {
        return res.status(404).json({ error: "Cannot find" });
      }

      return res.status(201).json(receiptDetail);
    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  addNewReceipt = async (req, res, next) => {
    try {
      const { customerId, total, ticketTypeId, amount, date } = req.body;
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
