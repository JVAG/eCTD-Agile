var express = require('express');

module.exports.getCurSequence = function(sequences){
    return sequences[sequences.length -1];
}