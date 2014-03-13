var express = require('express'),
    ejs = require('ejs');

var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/ejs');
app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.render('index.ejs');
});

app.listen(80);
