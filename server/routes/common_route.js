const express = require('express');
const router = express.Router();

// Định nghĩa một số route chung
router.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

router.get('/about', (req, res) => {
  res.send('About us page');
});

module.exports = router;
