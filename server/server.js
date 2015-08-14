// var http = require('http');
// var express = require('express');
// var app = express();
// var Sequelize = require('sequelize');
// sequelize = new Sequelize("process.env.HEROKU_POSTGRESQL_URL")

// var Course = sequelize.define('economics', {
//   id: Sequelize.INTEGER,
//   dept: Sequelize.STRING,
//   num: Sequelize.INTEGER,
//   name: Sequelize.STRING,
//   req: Sequelize.BOOLEAN
//   }, 
//   {timestamps: false}
// );

// app.use('/', express.static("client"));

// app.get('/classes', function (req, res, next) {
//   Course.findAll({
//     where: {
//       id: 01
//     }
//   }).then(function (economics) {
//     res.send(economics)
//   });
// });



// app.listen(3000);

var express = require('express')
  , http    = require('http')
  , path    = require('path')
  , db      = require('./models');

var app = express();

var pg = require('pg');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use('/', express.static("client"));



db.sequelize.sync().then(function() {
  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
});