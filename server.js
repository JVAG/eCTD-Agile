'use strict'
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send("Server is listening in port " + port);
});
app.listen(port, function(){
    console.log("Server is listening in port " + port);
});
