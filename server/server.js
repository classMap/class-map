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

var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

mongoose.connect('mongodb://alven:4nshuman@ds033143.mongolab.com:33143/classmap:5000', function(err) {
    if(err){ return err; }
    console.log('connected to DB');
});

var majorSchema = new Schema ({
  major: {type: String, required: true, index: {unique: true}},
  classes: {type: [String], required: true}
});

var major = mongoose.model('major', majorSchema, 'courses');

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', express.static("client"));

app.post('/majors', function(req, res){
  console.log("Fetching majors...");
  major.findOne({
    major: req.body.major
  }, function(err, data) {
    if (err) {
      return console.log(err);
    }
  res.send(data);
  res.end();
  })
});

app.listen(5000);

module.exports = app;
