const express = require('express');
const contactController = require('../controllers/contact.controller');

const router = express.Router();

router.post('/', contactController.submitContact);
router.get('/', contactController.getSubmissions);

module.exports = router;
