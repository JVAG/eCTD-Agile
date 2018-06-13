var express = require('express');
var path = require('path');
var fs = require('fs');
var fscopy = require('recursive-copy');
var dirToJson = require('dir-to-json');

var config = require('../config');
var Folder = require('../models/folder-api');

module.exports.AddSequence = function(dossier){
    /* Copy template to current sequence folder */
    var templatePath = getTemplatePath(dossier);

    var dossierPath = getDossierPath(dossier);
    
    return new Promise(function(resolve, reject){
        fscopy(templatePath, dossierPath)
        .then(function(result){
            resolve({
                foldersCopied: result,
                dossier: dossier
            });
        })
        .catch(function(err){
            reject(err);
        });
    });
};

module.exports.GetSequence = function(dossier){
    var dossierPath = getDossierPath(dossier);
    return dirToJson(dossierPath);
};

function getDossierPath(dossier){
    return path.join(config.DRAFTS_PATH, dossier._id.toString(), dossier.currentSequence.Name);;
}

function getTemplatePath(dossier){
    var folder = dossier.Region + '-' + dossier.ApplicationType + '-ectd' + dossier.EctdVersion;
    return path.join(config.TEMPLATES_PATH, folder);
}