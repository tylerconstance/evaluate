'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/evaluate', function(err) {
  if(err) {
    console.log("Failed connecting to mongodb! " + err);
  } else {
    console.log("You're in, son!");
  }
});
