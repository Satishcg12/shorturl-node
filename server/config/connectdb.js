const mongoose = require('mongoose');

module.exports = {
    connect: (uri) => {
      mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
        if (err) {
          console.error(err);
          return;
        }
  
        console.log('Connected to the database.');
      });
    }
  };
  