var express = require('express');
var router = express.Router();
var User = require('../models/model');


router.post('/login',function(req,res){
    User.findOne(req.body,function(err,data){
        if(err) res.status(422).send({error: err.message});
        if(data){
            res.send(JSON.stringify({auth:true}));
        }
        else{
            res.send(JSON.stringify({auth:false}));
        }     
    });
});

module.exports = router;