var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var IndexMapSchema = new Schema({
    DossierId: {type: mongoose.Schema.Types.ObjectId, ref: 'Dossier', required: true, index: true},
    Sequence: {type: String, required: true},
    RelativePathId: {type: mongoose.Schema.Types.ObjectId, ref: 'XMLMapping', required: true, index: true},
    DossierPath: {type: String, required: true, index: true},
    DirectoryPath: {type: String, required: true, index: true},
    Attributes: [{
        Name: String,
        Value: String
    }],
    ModifiedFile: {type: String},
    Operation: {type: String}
},
{
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true 
    }
});

IndexMapSchema.virtual('FullPath').get(function(){
    return this.DossierPath + this.DirectoryPath;
});
var IndexMapModel = mongoose.model('IndexMapping', IndexMapSchema);
module.exports = IndexMapModel;