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
    question1:
    {
      question: data[0].question,
      description: data[0].description,
      question_name: data[0].question_name,
      question_yes: data[0].question_yes,
      question_no: data[0].question_no
    },
    question2:
    {
      question: data[1].question,
      description: data[1].description,
      question_name: data[1].question_name,
      question_yes: data[1].question_yes,
      question_no: data[1].question_no
    },
    question3:
    {
      question: data[2].question,
      description: data[2].description,
      question_name: data[2].question_name,
      question_yes: data[2].question_yes,
      question_no: data[2].question_no
    },
    question4:
    {
      question: data[3].question,
      description: data[3].description,
      question_name: data[3].question_name,
      question_yes: data[3].question_yes,
      question_no: data[3].question_no
    },
    question5:
    {
      question: data[4].question,
      description: data[4].description,
      question_name: data[4].question_name,
      question_yes: data[4].question_yes,
      question_no: data[4].question_no
    },
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
