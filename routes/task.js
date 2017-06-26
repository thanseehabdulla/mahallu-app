var express = require('express');

var router = express.Router();

var MongoClient = require('mongodb').MongoClient;

var ObjectID = require('mongodb').ObjectID;
  
var urls = require('../config');
 
var url = urls.url; 

var bcrypt = require('bcrypt');






module.exports = router;