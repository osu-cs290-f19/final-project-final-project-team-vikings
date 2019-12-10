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

 var path = require('path');
 var express = require('express');
 var exphbs = require('express-handlebars');
 var app = express();
 var port = process.env.PORT || 3000;
 var showPage = true;
 app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
 app.set('view engine', 'handlebars');
 app.use(express.static('public'));


app.get('/', function (req, res) {
	res.render('home');
});

app.get('*', function (req, res) {
  res.render('404');
});


function readFileHTMLPath(pathToHtml,res) {
fs.readFile(pathToHtml, 'utf-8',function (err, pathToHtml) {
	if (err) {
		throw err;
	}
	res.writeHeader(200, {"Content-Type": "text/html"});
	res.write(pathToHtml);
	res.end();
	});
}

//port
app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
