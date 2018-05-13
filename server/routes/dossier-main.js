var express = require('express');
var router = express.Router();
var path = require('path');


var config = require('../config');
var Dossier = require('../models/dossier-model');
var Sequence = require('../models/sequence-model');
var Folder = require('../models/folder-api');

/**
 * Return thge dossier with given id
 * @route {GET} /dossier/:id
 * @routeparam {string} :id is the unique ObjectId of the dossier requested
 * @returns {DossierObject} dosssier-object
 */
router.get('/:id', function(req, res){
    var dossierId = req.params.id;
    Dossier.findOne({_id: dossierId})
        .then(function(result){
            res.send(result);
        })
        .catch(function(err){
            res.status(500).send(err); 
        });
});

/**
 * Returns list of all dossiers
 * @route {GET} /dossier
 * @returns {Array of DossierObject} Array of dossiers [{dosssier-object,....}]
 */
router.get('/', function(req, res) {
    console.log('Testing /dossier routes');
    req.send('Returning all dossiers');
});

/**
 * Saves given dossier-object in the database
 * @route {POST} /dossier
 * @bodyparam {DossierObject} dossier objevt to be saved in the database
 */
router.post('/', function(req, res, next){
    Dossier.create(req.body)
    .then(function(dossier){
        var dossierId = dossier._id;
        var curSequence = Sequence.getCurSequence(dossier.Sequences);
        var templatePath = getTemplatePath(dossier);
        var dossierPath = path.join(config.DRAFTS_PATH, dossierId.toString(), curSequence.Name);
        Folder.copyAll(templatePath, dossierPath)
        .then(function(){
            res.send(dossierId);
        })
        .catch(function(err){
            res.status(500).send(err); 
        });
    })
    .catch(function(err){
        res.status(500).send(err); 
    });
});

function getTemplatePath(dossier){
    var folder = dossier.Region + '-' + dossier.ApplicationType + '-ectd' + dossier.EctdVersion;
    return path.join(config.TEMPLATES_PATH, folder);
}
module.exports = router;

