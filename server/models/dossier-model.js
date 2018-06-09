var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DossierSchema = new Schema({
    Title: { type: String, required: true },
    Description: { type: String },
    Path: { type: String, default: '' },
    Region: { type: String, required: true },
    ApplicationType: { type: String, required: true },
    EctdVersion: { type: String, required: true },
    DosageForm: { type: String, required: true },
    Applicant: { type: String, required: true },
    DueDate: { type: Date, default: Date.now },
    DateCreated: { type: Date, default: Date.now },
    DateModified: { type: Date, default: Date.now },
    ProductBrandName: { type: String, required: true },
    ProductGenericName: { type: String, required: true },
    ProductManufacturer: { type: String, required: true },
    AtcCode: { type: String, required: true },
    Sequences: [{
        Name: { type: String, required: true },
        Description: { type: String, required: true }
    }],
    DrugSubstances: [{
        Name: String,
        Manufacturer: String
    }]
}, 
{
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true 
    }
  }
);

DossierSchema.virtual('currentSequence').get(function(){
    return this.Sequences[this.Sequences.length -1];
});

var DossierModel = mongoose.model('Dossier', DossierSchema);
module.exports = DossierModel;