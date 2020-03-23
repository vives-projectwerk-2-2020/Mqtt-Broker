const http = require('http');
const hostname = '127.0.0.1';
var express = require('express')
var app = express();
const port = 3000;
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '\\views');


var server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
  });

app.route('/')
.get(function(req, res){
    res.render('index.ejs');
});

  
server = app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  