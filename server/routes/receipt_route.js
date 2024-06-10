const express = require('express');
const router = express.Router();
const ReceiptController = require('../controllers/receipt_controller');

router.get('/', ReceiptController.getReceipts);
router.post('/', ReceiptController.addNewReceipt);

module.exports = router;