const Quote = require('../models/quote');

exports.fetchNewQuote = (req, res, next) => {
  Quote.count().then(count => {
    Quote.findOne().skip(Math.floor(Math.random() * count)).select('quote source -_id').then(randomQuote => {
      res.json(randomQuote);
    }).catch(error => {
      res.send(error);
    });
  }).catch(error => {
    res.send(error);
  });
}
