var express = require('express');
var router = express.Router();
var Exhibit = require('../models/exhibit');

router.get('/',function(req,res){
    res.json({message:'welcome to the API page!'});
});

router.route('/exhibits')

.get(function(req,res,next){
    Exhibit.find(function(err,exhibit){
        if(err) return next(err);
        res.json(exhibit);
    })
})

.post(function(req,res,next){
        var exhibit = new Exhibit(req.body);
        exhibit.save(function(err){
            if(err) return next(err);
            res.json({message: 'new exhibists saved'});
        });

    })

router.route('/exhibits/:exhibit_id')

.get(function(req,res,next){
    Exhibit.findById(req.params.exhibit_id, function(err,exhibit){
        if(err) return next(err);
        if(exhibit == null){
            res.json({message: 'No exhibit found'});
            return next(err);
        }
        res.json(exhibit);
    })
})

/*.put(function(req,res,next){
    Exhibit.findById(req.params.exhibit_id, function(err,exhibit){
        if(err) return next(err);
        if(exhibit == null) {
           res.json({message: 'No exhibit found'});
           return next(err);
        }
        exhibit = req.body;
        exhibit.save(function(err){
            if(err){
                res.json({message:'fail to update exhibit'});
                return next(err);
            }
            res.json({message:'successfully update exhibit'});
        })
    })
})*/

.put(function(req,res,next){
    Exhibit.findByIdAndUpdate(req.params.exhibit_id, req.body, function(err,exhibit){
        if(err)return next(err);
        if(exhibit == null) {
           res.json({message: 'No exhibit found!'});
           return next(err);
        }
        res.json({message:'successfully update exhibit'});
    })
})

.delete(function(req,res,next){
    Exhibit.findByIdAndRemove(req.params.exhibit_id, function(err){
        if(err) return next(err);
        res.json({message:'deleted exhibit'});
    })
})



module.exports = router;