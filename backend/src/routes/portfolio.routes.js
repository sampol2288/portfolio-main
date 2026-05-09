const express = require('express');
const Made With EmergentolioController = require('../controllers/Made With Emergentolio.controller');

const router = express.Router();

router.get('/', Made With EmergentolioController.getMade With EmergentolioData);

module.exports = router;
