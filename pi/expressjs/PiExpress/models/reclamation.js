var mongoose = require('../config/db');
var ReclamationSchema = mongoose.Schema({
    reclamation: String,type:String
});
module.exports = mongoose.model('Reclamation', ReclamationSchema);