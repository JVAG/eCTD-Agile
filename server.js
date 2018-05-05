'use strict'
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

/* Importing Server Routes */
var dossierApi = require('./server/routes/dossier-main');

var app = express();

// Create application/x-www-form-urlencoded parser
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/lib', express.static('bower_components'));

/* Using Server Routes */
app.use('/dossier', dossierApi);

/* Error server-side handling route */
app.use(function(err, req, res, next){
    console.error(err.message);
    console.error(err.stack);
    res.status(500).send(err);
});

var port = process.env.PORT || 3030;
app.listen(port, function(){
    console.log("Server is listening in port " + port);
});
