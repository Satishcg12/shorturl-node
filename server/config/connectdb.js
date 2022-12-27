const mongoose = require('mongoose');

module.exports = {
    connect: (uri) => {
      mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
        if (err) {
          
          return;
        }
  
        
      });
    }
  };
  