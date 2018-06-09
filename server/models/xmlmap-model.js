var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var XMLMapSchema = new Schema({
    RelativePath: { type: String, required: true, index: true, unique: true },
    XMLElement: { type: String, required: true },
    ElementTitle: { type: String, required: true },
    isFile: { type: String, required: true },
});

var XMLMapModel = mongoose.model('XMLMapping', XMLMapSchema);
module.exports = XMLMapModel;