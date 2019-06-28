require('dotenv').config();

var express = require('express');
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser')
var app = express();
var port = process.env.PORT || 9000;
var connection = require("./config/connection");



var routes = require('./controllers/dogs');
app.use('/', routes);



// you should change this to be wherever your html files are
app.use(express.static(__dirname + '/public')); 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',function(req,res) {
  res.sendFile('index.html');
 });



  app.listen(port, function () {

    console.log("Server listening on: http://localhost:" + port);
});
