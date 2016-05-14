var mongoose = require('../config/db');
var EventSchema = mongoose.Schema({
    Title: String,
    Description:String,
	Starting_Date:String,
	Time:String,
	Price:String,
	
});
module.exports = mongoose.model('Event', EventSchema);