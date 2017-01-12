// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
//gets info from body where we usually get form data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/
















 /**********
  * SERVER *
  **********/
 // listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
 app.listen(process.env.PORT || 3000, function() {
     console.log('Express server is up and running on http://localhost:3000/');
 });
