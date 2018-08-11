var express = require('express');
var router = express.Router();

var Dossier = require('../models/dossier-model');

/**
 * Returns list of all dossiers
 * @route {GET} /dossier
 * @returns {Array of DossierObject} Array of dossiers [{dosssier-object,....}]
 */
router.get('/', function(req, res) {
    console.log('Testing /dossierlist routes');
    Dossier.find({}, function(err, result){
        if(err){
            console.error('Error in getting all dossiers', err);
            res.status(500).send(err); 
        }
        else{
            console.log(result.length + " dossiers retrived");
            res.send(result); 
        }
    });
});

module.exports = router;