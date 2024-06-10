
const { Receipt } = require('../db/models');
const { v4: uuidv4 } = require("uuid");
class ReceiptController {
    getReceipts = async (req, res, next) => {
        try {
            const receipts = await Receipt.findAll();
            res.json(receipts);
          } catch (error) {
            console.error('Error fetching receipts:', error);
            return res.status(500).json({ error: 'Server error' });
          }
      };
  addNewReceipt = async (req, res, next) => {
    try {
      const date = new Date();
      const { customerId, total } = req.body;
    //   const id: uuidv4();
        const recepit = new Receipt(customerId, date, total );
    //   const recepit = await Receipt.create({
    //     id: uuidv4(),
    //     customerId,
    //     date,
    //     total,
    //   });
      console.log("my receipt:", recepit);
      //   await recepit.save();
      //   return res.status(201).json(recepit);
    } catch (error) {
      return res.send("Error creating Receipt").status(500);
    }
  };
}

module.exports = new ReceiptController();
