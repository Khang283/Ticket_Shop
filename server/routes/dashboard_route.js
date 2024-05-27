const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/dashboard_controller');

router.get('/api/v1/dashboard/monthly_revenue', DashboardController.getMonthlyRevenue);
router.get('/api/v1/dashboard/total_revenue', DashboardController.getTotalRevenue);
router.get('/api/v1/dashboard/total_ticket', DashboardController.getTotalTicket);
router.get('/api/v1/dashboard/total_client', DashboardController.getTotalClient);

module.exports = router;