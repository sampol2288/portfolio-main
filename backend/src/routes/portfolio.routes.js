const express = require('express');
const olioController = require('../controllers/olio.controller');

const router = express.Router();

router.get('/', olioController.getolioData);

module.exports = router;
