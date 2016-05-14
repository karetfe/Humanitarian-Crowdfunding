var mongoose = require('../config/db');
var SuccessStorySchema = mongoose.Schema({
    Title: String,
	Source:String,
    Description:String	
});
module.exports = mongoose.model('SuccessStory', SuccessStorySchema);