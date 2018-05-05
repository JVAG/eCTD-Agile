var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DossierSchema = new Schema({
    Title: { type: String, required: true, unique: true },
    Applicant: { type: String, required: true }
})

var DossierModel = mongoose.model('Dossier', DossierSchema);
module.exports = DossierModel;