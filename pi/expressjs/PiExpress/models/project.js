var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var Projectschema = new Schema({
title: String,
tagline:String,
deadLine:Date,
image:String,    
description: String, 
amount:Number,
currentamount:Number,
region:String,
lat:String,
lon:String,
category: String,
facebookUrl:String,
YoutubeUrl:String,
TwitterUrl:String, 
videoUrl:String,
Username:String,
UserTel:String    
});
module.exports = mongoose.model('Project', Projectschema);