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
        dossierObj = result.toObject();
        Sequence.GetSequence(dossierObj, function(folderData){
            Sequence.GetIndexMap(dossierId, function(indexMap){
                var dirTree = folderData.children.map(function(node){
                    return mapTreeNodes(node, indexMap);
                });
                res.send({
                    dossier: dossierObj,
                    folderTree: dirTree
                });
            });
        });
    })
    .catch(function(err){
        console.log(err.stack);
        res.status(500).send(err); 
    });

    function mapTreeNodes(node, indexMap){
        var indexId = indexMap[node.path] ? indexMap[node.path].toString() : node.name;
        var newNode = { "id": indexId, "text": node.name, type: node.type, path: node.path };
        if(node.parent){
            newNode["parent"] = node.parent;
        }
        if(node.type == 'file'){
            newNode["icon"] = "jstree-file";
        }
        if(node.children){
            newNode.children = node.children.map(function(node){
                return mapTreeNodes(node, indexMap);
            });
        }
        return newNode;
    }
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
        res.send(data.dossier._id); 
    })
    .catch(function(err){
        console.error('Error in creating dossier', err);
        res.status(500).send(err); 
    });
});


module.exports = router;