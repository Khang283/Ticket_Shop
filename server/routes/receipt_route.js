const express = require('express');
const router = express.Router();

const ReceiptController = require('../controllers/receipt_controller');

router.get('/receipts', ReceiptController.getReceipt);

module.exports  = router;