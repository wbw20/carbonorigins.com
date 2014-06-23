var express = require('express'),
    http = require('http'),
    https = require('https'),
    ejs = require('ejs'),
    fs = require('fs');

var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/ejs');
app.set('view engine', 'html');

app.use(express.static(__dirname + '/built'));

app.get('/', function(request, response) {
  response.render('index.ejs');
});

// app.get('/aerospace', function(request, response) {
//   response.render('aerospace/aerospace.ejs');
// });

app.get('/apollo', function(request, response) {
  response.render('apollo/apollo.ejs');
});

https.createServer({
  key: fs.readFileSync('./test/fixtures/server.key'),
  cert: fs.readFileSync('./test/fixtures/server.crt'),
  ca: fs.readFileSync('./test/fixtures/ca.crt'),
  requestCert: true
}, app).listen(443);

http.createServer(app).listen(6969);

