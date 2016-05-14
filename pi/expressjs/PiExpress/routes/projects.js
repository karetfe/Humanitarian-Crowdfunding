var Project = require('../models/project');
var express = require('express');
var router = express.Router();
var multer  =   require('multer');
var fs = require('fs');

var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './pulbic/uploads/');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });

var upload = multer({ //multer settings
                    storage: storage
                }).single('file');

/* get all projects */
router.get('/', function(req, res, next) {
    Project.find({}).exec(function(err, Project){
        if(err) res.json({error: err});
		res.json(Project);
    });
});

/* get specific project */
router.get('/:id',function(req,res){
	Project.findById(req.params.id).exec(function(err, Project){
		if(err) res.json({error: err});
		res.json(Project);
    });
});

/* add Project */
router.post('/',function(req, res){
    var p = new Project(req.body);
    p.save(function(err){
        if(err) res.json({error: err});
        res.json({message: 'project added!'});
    });
});


/* update project*/
router.put('/:id',function(req,res){
	var data = req.body;
    Project.findByIdAndUpdate(req.params.id, data, {new: true}, function(err){
        if(err) res.json({error: err});
        res.json({message: 'project updated!'});
    });
});

/* delete project*/
router.delete('/:id',function(req,res){
	Project.findByIdAndRemove(req.params.id, function(err){
        if(err) res.json({error: err});
        res.json({message: 'project deleted!'});
    });
});

/* search by category's name*/
router.get('/search/category/:cat',function(req,res){
	Project.find({category:req.params.cat},function(err,Project){
		if(err) res.json({error: err});
		res.json(Project);
    });
});

/* search by region*/
router.get('/search/region/:reg',function(req,res){
	Project.find({region:req.params.reg}).limit(3).exec(function(err,Project){
		if(err) res.json({error: err});
		res.json(Project);
    });
});

/* all projects sorted by category's name*/
router.get('/sortbycat',function(req,res){
	Project.find().sort({category:1}).exec(function(err,Project){
		if(err) res.json({error: err});
		res.json(Project)
    });
});

/* get the % of money for specific project */
router.get('/money/:id',function(req,res){
	Project.findById(req.params.id,function(err){
		if(err) res.json({error: err});
		var m=Project.amount;
        var n=Project.currentamount;
        var x = (n/m)*100;
        res.json(x);
    });
});

module.exports = router;
