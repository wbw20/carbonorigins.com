var express = require('express'),
    ejs = require('ejs');

var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/ejs');
app.set('view engine', 'html');

app.use(express.static(__dirname + '/built'));

app.get('/', function(request, response) {
  console.log(request.headers);
  response.render('index.ejs');
});

app.get('/aerospace', function(request, response) {
  response.render('aerospace/aerospace.ejs');
});

app.get('/apollo', function(request, response) {
  response.render('apollo/apollo.ejs');
});

app.listen(6969);
