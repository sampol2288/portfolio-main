const express = require('express');
const portfolioController = require('../controllers/portfolio.controller');

const router = express.Router();

router.get('/', portfolioController.getPortfolioData);

module.exports = router;
