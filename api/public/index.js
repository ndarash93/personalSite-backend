const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        'Public': 'Test'
    })
});

module.exports = router;