var express = require('express');
var path = require('path');
var fs = require('fs');
var fscopy = require('recursive-copy');
var dirToJson = require('dir-to-json');

var Folder = require('../models/folder-api');

const TEMPLATES_PATH = path.join(__dirname, '../templates');
const DRAFTS_PATH = path.join(__dirname, '../drafts');

module.exports.AddSequence = function(dossier){
    /* Copy template to current sequence folder */
    var templatePath = GetTemplatePath(dossier);

    var dossierPath = GetDossierPath(dossier);
    
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
    if(!fs.existsSync(DRAFTS_PATH)){
        fs.mkdirSync(DRAFTS_PATH);
    }
    return path.join(DRAFTS_PATH, dossier._id.toString(), dossier.currentSequence.Name);
}

function GetTemplatePath(dossier) {
    var folder = dossier.Region + '-' + dossier.ApplicationType + '-ectd' + dossier.EctdVersion;
    var templateFolder =  path.join(TEMPLATES_PATH, folder);
    if(!fs.existsSync(templateFolder)){
        throw new Error("The template " + folder + " does not exist");
    }
    return templateFolder;
}