

var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

mongoose.connect('mongodb://alven:4nshuman@ds033143.mongolab.com:33143/classmap', function(err) {
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

app.listen(process.env.PORT || 5000)



module.exports = app;
