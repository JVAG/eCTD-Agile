var express = require('express');
var fs = require('fs');
var fscopy = require('recursive-copy');

module.exports.copyAll = function(srcPath, destPath){
    return fscopy(srcPath, destPath);
}