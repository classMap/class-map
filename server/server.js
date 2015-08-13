var http = require('http');
var express = require('express');
var app = express();
var Sequelize = require('sequelize');
sequelize = new Sequelize("postgres://alven:1234@localhost:5432/courses")

var Course = sequelize.define('economics', {
  id: Sequelize.INTEGER,
  dept: Sequelize.STRING,
  num: Sequelize.INTEGER,
  name: Sequelize.STRING,
  req: Sequelize.BOOLEAN
  }, 
  {timestamps: false}
);

app.use('/', express.static("client"));

app.get('/classes', function (req, res, next) {
  Course.findAll({
    where: {
      id: 01
    }
  }).then(function (economics) {
    res.send(economics)
  });
});



app.listen(3000);