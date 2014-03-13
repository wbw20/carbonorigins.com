var express = require('express'),
    ejs = require('ejs');

var app = express();

app.get('/', function(request, response) {
  response.send('ok');
});

app.listen(80);
