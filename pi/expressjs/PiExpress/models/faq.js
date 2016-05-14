var mongoose = require('../config/db');
var FaqSchema = mongoose.Schema({
    question: String,
    response:String
});
module.exports = mongoose.model('Faq', FaqSchema);