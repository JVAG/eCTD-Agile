var express = require('express');
var router = express.Router();

var Dossier = require('../models/dossier-model');
var Sequence = require('../models/sequence-api');

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
            console.log(err);
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
        return Sequence.AddSequence(dossier.toObject());      
    })
    .then(function(data){
        console.log("New Dossier created by id " + data.dossier._id);
        res.send(data.dossier._id); 
    })
    .catch(function(err){
        console.log(err);
        res.status(500).send(err); 
    });
});


module.exports = router;

