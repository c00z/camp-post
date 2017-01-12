var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/camppost-api" );

module.exports.Campsite = require("./campsites.js");
