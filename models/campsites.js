var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

//Set up campsite Schema
var CampsiteSchema = new Schema({
  name: String,
  description: String,
  address: String,
  url: String,
  coordinates: {
    lat: Number,
  	lng: Number
  }
});

//Set up Campsite model
var Campsite = mongoose.model('Campsite', CampsiteSchema);

module.exports = Campsite;
