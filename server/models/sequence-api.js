var express = require('express');
var path = require('path');
var fs = require('fs');
var fscopy = require('recursive-copy');
var dirToJson = require('dir-to-json');

var Folder = require('../models/folder-api');
var IndexMapping = require('../models/indexmap-model');

const TEMPLATES_PATH = path.join(__dirname, '../templates');
const DRAFTS_PATH = path.join(__dirname, '../drafts');

module.exports.AddSequence = function(dossier){
    /* Copy template to current sequence folder */
    var templatePath = GetTemplatePath(dossier);
<<<<<<< HEAD

=======
>>>>>>> dev-dossier-validate
    var dossierPath = GetDossierPath(dossier);
    
    return new Promise(function(resolve, reject){
        fscopy(templatePath, dossierPath)
        .then(function(folderCopyResult){
            console.log("Draft created from template. Creating file mappings...");

            Folder.GetXmlMappings().then(function(xmlMapResult){
                var xmlMap = {};
                xmlMapResult.forEach(xmlMapEntry => {
                    var xmlEmtryObj = xmlMapEntry.toObject();
                    xmlMap[xmlEmtryObj.RelativePath] = xmlEmtryObj;
                });
                var indexMappings = [];
                var foldersSkipped = [];
                folderCopyResult.forEach(function(copyResult){
                    var fullPath = copyResult.dest;
                    fullPath = fullPath.replace(/\\/g,"/");
                    dossierPath = dossierPath.replace(/\\/g,"/");
                    if(fullPath.startsWith(dossierPath)){
                        var xmlKey = fullPath.substr(dossierPath.length+1);
                        var xmlData = xmlMap[xmlKey];
                        if(xmlData != null){
                            indexMappings.push(createIndexMapObject(xmlData._id, dossier, dossierPath.substring(0, dossierPath.lastIndexOf('/')), xmlKey));
                        }
                        else {
                            foldersSkipped.push(xmlKey);
                        }
                    }
                });
                IndexMapping.insertMany(indexMappings).then(function(indexMappingResult){
                    console.log(indexMappingResult.length + " index mappings added. Skipped: " + foldersSkipped.length);
                    console.log(foldersSkipped);    
                    return folderCopyResult;
                });
            });
        })
        .then(function(folderCopyResult){
            resolve({
                foldersCopied: folderCopyResult,
                dossier: dossier
            });
        })
        .catch(function(err){
            console.error("Error in creating draft created from template" , err);
            reject(err);
        });
    });
};

module.exports.GetSequence = function(dossier, callback){
    var dossierPath = GetDossierPath(dossier);
    dirToJson(dossierPath, function(err, dirTree){
        if(err){
            throw err;
        }
        else {
            callback(dirTree);
        }
    })
};

module.exports.GetIndexMap = function(dossierId, callback){
    IndexMapping.find({DossierId: dossierId}, function(err, result){
        if(err){
            console.log(err);
            throw err;
        }
        else{    
            var indexMap = {};
            result.forEach(function(row){
                indexMap[row.DirectoryPath] = row._id;
            });
            callback(indexMap);
        }
    })
}

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

function createIndexMapObject( xmlMappingId, dossier, dossierPath, xmlKey ){
    var obj = {
        DossierId: dossier._id,
        Sequence: dossier.currentSequence.Name,
        RelativePathId: xmlMappingId,
        DossierPath: dossierPath,
        DirectoryPath: xmlKey
    };
    return obj;
}