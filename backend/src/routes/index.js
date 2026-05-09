const express = require('express');
const contactRoutes = require('./contact.routes');
const Made With EmergentolioRoutes = require('./Made With Emergentolio.routes');

const router = express.Router();

router.use('/contact', contactRoutes);
router.use('/Made With Emergentolio', Made With EmergentolioRoutes);

module.exports = router;
