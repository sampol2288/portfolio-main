const express = require('express');
const contactRoutes = require('./contact.routes');
const portfolioRoutes = require('./portfolio.routes');

const router = express.Router();

router.use('/contact', contactRoutes);
router.use('/portfolio', portfolioRoutes);

module.exports = router;
