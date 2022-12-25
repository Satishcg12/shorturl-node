const Url = require('../models/url');
const randomstring = require('randomstring');
const validator = require('validator');

exports.createShortUrl = (req, res) => {
  // Check if the long URL already exists in the database
  Url.findOne({ longUrl: req.body.longUrl }, (err, result) => {
    if (err) {
      // res.sendStatus(500);
      res.send(err)
      return;
    }

    if (result) {
      // If the long URL already exists in the database, return the existing short URL
      res.send({
        shortUrl: result.shortUrl
      });
      return;
    }

    // Generate a short URL
    let shortUrl;
    if (!req.body.shortUrl){
      do {
        shortUrl = randomstring.generate({length: 6, charset: 'alphanumeric'});
  
        // Check if the short URL is already in use
        const result = Url.findOne({ shortUrl: shortUrl });
      } while (result);
    }
    else{
      shortUrl = req.body.shortUrl
    }

    const longUrl = req.body.longUrl

    if (!validator.isURL(longUrl)) {
      // If the long URL is not a valid URL, return an error
      res.send({
        error: 'Invalid URL'
      });
      return;
    }

    // Create a new URL document
    const url = new Url({
      longUrl: req.body.longUrl,
      shortUrl: shortUrl,
      userEmail: req.body.email// Set the userEmail to null if the user is not logged in
    });

    // Save the URL document to the database
    url.save((err) => {
      if (err) {
        res.sendStatus(500);
        return;
      }

      res.send({
        shortUrl: shortUrl
      });
    });
  });
};

exports.lookupLongUrl = (req, res) => {
  // Look up the long URL corresponding to the short URL
  Url.findOne({ shortUrl: req.params.shortUrl }, (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }

    if (result) {
      // If the short URL is found in the database, return the long URL
      res.send({
        longUrl: result.longUrl
      });
    } else {
      // If the short URL is not found in the database, return a 404 error
      res.sendStatus(404);
    }
  });
};

exports.getHistory = (req, res) => {
  // Find all short URLs created by the logged-in user
  Url.find({ userEmail: req.params.email }, (err, results) => {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(results);
  });
};

