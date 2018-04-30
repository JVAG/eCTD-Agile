'use strict'
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
var port = process.env.PORT || 3030;

app.use(express.static('public'));
app.use('/lib', express.static('bower_components'));

app.listen(port, function(){
    console.log("Server is listening in port " + port);
});
