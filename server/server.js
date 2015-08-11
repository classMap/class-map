var http = require('http');
var express = require('express');
var app = express();
var Sequelize = require('sequelize');
sequelize = new Sequelize('courses', 'alven', '1234', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432
})

var Course = sequelize.define('course')