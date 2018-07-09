'use strict'
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var Mongoose = require('mongoose');

process.env.NODE_ENV = 'dev';
console.log("Node environment :");

/* Importing Server Routes */
var dossierApi = require('./server/routes/dossier-main');

var app = express();

// Create application/x-www-form-urlencoded parser
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/lib', express.static('bower_components'));

Mongoose.createConnection('mongodb://root:uymhDsiWFZQ7@localhost:27017/ectd2?authSource=admin', function(err) {
    if(err){
        console.log('Not connected to database ', err);
    }
    else{
        console.log('Successfully connected to db');
    }
});

/* Using Server Routes */
app.use('/dossier', dossierApi);

/* Server-side error handling route */
app.use(function(err, req, res, next){
    console.error(err.message);
    console.error(err.stack);
    res.status(500).send(err);
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server is listening in port " + port);
});
