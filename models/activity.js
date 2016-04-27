'use strict';

var mongoose = require('mongoose');

var activitySchema = new mongoose.Schema({
  name: String,
  subtitle: String,
  image: String,
});

var model = mongoose.model('Activity', activitySchema);

module.exports = model;
