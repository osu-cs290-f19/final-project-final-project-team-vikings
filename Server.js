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
 var data = require("./questions");
 var showPage = true;
 app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
 app.set('view engine', 'handlebars');
 app.use(express.static('public'));


app.get('/', function (req, res) {
	res.render('home',
  {
    question1: data[0],
    question2: data[1],
    question3: data[2],
    question4: data[3],
    question5: data[4],
    questionData: data
  });
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
