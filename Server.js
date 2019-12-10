/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Nicholas Dyhre
 * Email: dyhren@oregonstate.edu
 *	
 * Name: Sebastian Vestrup
 * Email: vestrups@oregonstate.edu
 *
 */

//init 
var path = require('path');
var express = require('express');
var handlebars = require('handlebars');
var app = express();
var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');
var postData = require('./postData');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

//Path
/*
app.get('/', function(req,res, next){
	
}

app.get('*', function (req, res) {
  //404
});
*/

//port
app.listen(port, function () {
  console.log("== Server is listening on port", port);
});