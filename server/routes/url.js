const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url');

router.post('/shorten', urlController.createShortUrl);

router.get('/:shortUrl', urlController.lookupLongUrl);

router.get('/history/:email', urlController.getHistory);

module.exports = router;
