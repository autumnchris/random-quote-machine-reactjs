const express = require('express');
const quoteController = require('../controllers/quote-controller');
const router = express.Router();

router.get('/new-quote', quoteController.fetchNewQuote);

module.exports = router;
