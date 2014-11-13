var express = require('express');
var pg = require('pg');
var app = express();
var bodyParser = require('body-parser');
var models = require('./models');
var CD1 = models.CD;
// var path = require('path');
// var routes = require('/routes');
var client = new pg.Client({
    user: "navzazhiolexqn",
    password: "mJAmrmCj6t3vfvtJqKkmlUP9-W",
    database: "d563p91di2mbts",
    port: 5432,
    host: "ec2-54-204-43-138.compute-1.amazonaws.com",
    ssl: true
}); 

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public')); //Serve static files
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

app.listen(app.get('port'), function () {
  console.log('listening!');
});

app.get('/', function(req, res) {
  res.sendFile('/public/index.html');
});

sequelize.sync({force: true}).complete(function(err) {
  if (err) {
    throw err[0]
  } else {
    http.createServer(app).listen(app.get('port'), function () {
      console.log('Express working and listening');
      console.log(CD1);
    });
  };
});

