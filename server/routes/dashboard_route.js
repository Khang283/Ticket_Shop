const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/dashboard_controller');

router.get('/dashboard/monthly_revenue', DashboardController.getMonthlyRevenue);
router.get('/dashboard/total_revenue', DashboardController.getTotalRevenue);
router.get('/dashboard/total_ticket', DashboardController.getTotalTicket);
router.get('/dashboard/total_client', DashboardController.getTotalClient);

module.exports = router;