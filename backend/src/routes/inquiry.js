const express = require('express');
const router = express.Router();
const { 
    createInquiry, 
    getAllInquiries, 
    updateInquiryStatus 
} = require('../controllers/inquiryController');

router.post('/', createInquiry);
router.get('/', getAllInquiries);
router.patch('/:id/status', updateInquiryStatus);

module.exports = router;
