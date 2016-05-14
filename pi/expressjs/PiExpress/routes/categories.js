var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET Liste des events. */
router.get('/', function(req, res, next) {
    models.category.find({}).exec(function(err, categories){
        if(err) res.json({error: err});
        res.json(categories);
    });
});

/* POST Ajouter une catégorie */
router.post('/', function(req, res){
    var c = new models.category({name: req.body.name,projects: req.body.projects});
    c.save(function(err, cat){
        if(err) res.json({error: err});
        res.json(cat);
    });
});

/* GET Récupérer une catégorie */
router.get('/:id', function(req, res){
    models.category.findById(req.params.id, function(err, c){
        if(err) res.json({error: err});
        res.json(c);
    });
});


/* PUT Modifier une catégorie */
router.put('/:id', function(req, res){
    var data = req.body;
    if(data.posts == undefined) data.posts = [];
    models.category.findByIdAndUpdate(req.params.id, data, {new: true}, function(err, c){
        if(err) res.json({error: err});
        res.json(c);
    });
});

/* DELETE Supprimer une catégorie */
router.delete('/:id', function(req, res){
    models.category.findByIdAndRemove(req.params.id, function(err){
        if(err) res.json({error: err});
        res.json({done: 1});
    });
});

module.exports = router;
