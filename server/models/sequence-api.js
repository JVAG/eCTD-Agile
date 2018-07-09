var express = require('express');
var path = require('path');
var fs = require('fs');
var fscopy = require('recursive-copy');
var dirToJson = require('dir-to-json');

var config = require('../config');
var Folder = require('../models/folder-api');

module.exports.AddSequence = function(dossier){
    console.log('In AddSequence');
    /* Copy template to current sequence folder */
    var templatePath = GetTemplatePath(dossier);
    console.log("TemplatePath: " + templatePath);

    var dossierPath = GetDossierPath(dossier);
    console.log("dossierPath: " + dossierPath);
    
    return new Promise(function(resolve, reject){
        fscopy(templatePath, dossierPath)
        .then(function(result){
            console.log("Draft created from template");
            
            resolve({
                foldersCopied: result,
                dossier: dossier
            });
        })
        .catch(function(err){
            console.error("Error in creating draft created from template" , err);
            reject(err);
        });
    });
};

module.exports.GetSequence = function(dossier){
    var dossierPath = GetDossierPath(dossier);
    return dirToJson(dossierPath);
};

function GetDossierPath(dossier){
    return path.join(config.DRAFTS_PATH, dossier._id.toString(), dossier.currentSequence.Name);;
}

function GetTemplatePath(dossier){
    var folder = dossier.Region + '-' + dossier.ApplicationType + '-ectd' + dossier.EctdVersion;
    return path.join(config.TEMPLATES_PATH, folder);
}