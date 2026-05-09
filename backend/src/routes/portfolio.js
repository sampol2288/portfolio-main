const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

router.get('/', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, '../data/olio.json'), 'utf8');
        res.json({ success: true, data: JSON.parse(data) });
    } catch (error) {
        console.error('Error reading olio data:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch olio data' });
    }
});

module.exports = router;
