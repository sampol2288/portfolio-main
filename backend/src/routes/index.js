const express = require('express');
const contactRoutes = require('./contact.routes');
const olioRoutes = require('./olio.routes');

const router = express.Router();

router.use('/contact', contactRoutes);
router.use('/olio', olioRoutes);

module.exports = router;
