var express = require('express');
var router = express.Router();

var BASE_PATH_MAC = '/Users/snehalindurkar/Desktop/Project eCTD/Dossiers';
var BASE_PATH_WIN = 'C:/Dossiers/';
var BASE_PATH = BASE_PATH_WIN;
if(process.platform == 'darwin'){
  BASE_PATH = BASE_PATH_MAC;
}

/**
 * Return thge dossier with given id
 * @route {GET} /dossier/:id
 * @routeparam {string} :id is the unique ObjectId of the dossier requested
 * @returns {DossierObject} dosssier-object
 */
router.get('/:id', function(req, res){
    console.log("Testing /dossier/:id get route. params: ", req.params);
    res.send('Returned one dossier with id ', req.params.id);
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
router.post('/', function(req, res){
    console.log("Testing dossier post route. dossier to post: ", req.body);
    var dossier = reqq.body;
    res.status(200).json({'dossier' : dossier});
});
module.exports = router;

