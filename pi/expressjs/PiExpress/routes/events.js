var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET Liste des events. */
router.get('/', function(req, res, next) {
    models.event.find({}).exec(function(err, events){
        if(err) res.json({error: err});
        res.json(events);
    });
});

/* POST Ajouter une events */
router.post('/', function(req, res){
    var c = new models.event({Title: req.body.Title,description: req.body.description,Starting_Date: req.body.Starting_Date,Price: req.body.Price,Time: req.body.Time});
    c.save(function(err, cat){
        if(err) res.json({error: err});
        res.json(cat);
    });
});

/* GET Récupérer une events */
router.get('/:id', function(req, res){
    models.event.findById(req.params.id, function(err, c){
        if(err) res.json({error: err});
        res.json(c);
    });
});


/* PUT Modifier une events */
router.put('/:id', function(req, res){
    var data = req.body;
    if(data.posts == undefined) data.posts = [];
    models.event.findByIdAndUpdate(req.params.id, data, {new: true}, function(err, c){
        if(err) res.json({error: err});
        res.json(c);
    });
});

/* DELETE Supprimer une events */
router.delete('/:id', function(req, res){
    models.event.findByIdAndRemove(req.params.id, function(err){
        if(err) res.json({error: err});
        res.json({done: 1});
    });
});

module.exports = router;
