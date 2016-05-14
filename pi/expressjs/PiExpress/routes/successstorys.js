var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET All */
router.get('/', function(req, res, next) {
    models.successstory.find({}).exec(function(err, successstorys){
        if(err) res.json({error: err});
        res.json(successstorys);
    });
});

/* POST*/
router.post('/', function(req, res){
    var c = new models.successstory({Title: req.body.Title,Source: req.body.Source,Description: req.body.Description});
    c.save(function(err, cat){
        if(err) res.json({error: err});
        res.json(cat);
    });
});

/* GET ById*/
router.get('/:id', function(req, res){
    models.successstory.findById(req.params.id, function(err, c){
        if(err) res.json({error: err});
        res.json(c);
    });
});


/* PUT */
router.put('/:id', function(req, res){
    var data = req.body;
    if(data.posts == undefined) data.posts = [];
    models.successstory.findByIdAndUpdate(req.params.id, data, {new: true}, function(err, c){
        if(err) res.json({error: err});
        res.json(c);
    });
});

/* DELETE */
router.delete('/:id', function(req, res){
    models.successstory.findByIdAndRemove(req.params.id, function(err){
        if(err) res.json({error: err});
        res.json({done: 1});
    });
});

module.exports = router;
