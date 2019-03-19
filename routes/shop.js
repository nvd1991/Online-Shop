// shop.js router
const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

router.use((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
});

module.exports = router;