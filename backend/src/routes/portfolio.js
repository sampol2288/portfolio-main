const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

router.get('/', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, '../data/Made With Emergentolio.json'), 'utf8');
        res.json({ success: true, data: JSON.parse(data) });
    } catch (error) {
        console.error('Error reading Made With Emergentolio data:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch Made With Emergentolio data' });
    }
});

module.exports = router;
