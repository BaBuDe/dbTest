var express = require('express');
var pg = require('pg');
var app = express();
var bodyParser = require('body-parser');
var db = require('/models');
var path = require('path');
var routes = require('/routes');
// var connectionString = 'postgres://qqpxuatnftvyqz:ZfsEjCpkpGtLgwQ5fE1a1AyCCp@ec2-54-163-249-168.compute-1.amazonaws.com:5432/d4uj91gp54rn5k';
var client = new pg.Client({
    user: "warshguitsgtjr",
    password: "iVBdRJrQ-syQ5xW1WbasAxW0s_",
    database: "d85ejkgqeeomij",
    port: 5432,
    host: "ec2-107-20-191-205.compute-1.amazonaws.com",
    ssl: true
}); 

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if ('development' === app.get('env')) {
  app.use(express.errorHandler())
};

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
app.get('/cds', cd.list);

db.sequelize.sync().complete(function(err) {
  if (err) {
    throw err[0]
  } else {
    http.createServer(app).listen(app.get('port'), function () {
      console.log('Express working and listening');
    });
  }
});

// client.connect();
// var query = client.query('SELECT * FROM composers');

//   query.on('row', function(row) {
//     console.log(JSON.stringify(row));
//   });

