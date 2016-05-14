var mongoose = require('../config/db');
var CategorySchema = mongoose.Schema({
    name: String,
	projects:[{type: mongoose.Schema.Types.ObjectId, ref: 'Project'}]
	
});
module.exports = mongoose.model('Category', CategorySchema);