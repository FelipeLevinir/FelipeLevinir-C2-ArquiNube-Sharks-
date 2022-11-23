const path = require('path');
const Shark = require('../models/sharks');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/sharks.html'));
};

exports.create = function (req, res) {
    var newShark = new Shark(req.body);
    console.log(req.body);
    newShark.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save shark to database');
        } else {
            res.redirect('/sharks/getshark');
        }
  });
               };

exports.list = function (req, res) {
        Shark.find({}).exec(function (err, sharks) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getshark', {
                        sharks: sharks
             });
        });
};

exports.edit = function(req, res){
        Shark.findOne({_id: req.params.id}).exec(function (err, product) {
                if (err) { 
                        console.log("Error:", err); return; 
                }
                res.render('getshark', {
                        sharks: sharks
             });
        });
};

exports.update = function(req, res){
        Shark.findByIdAndUpdate( req.params.id, {$set: {
            name: req.body.name,
            character: req.body.character
        }}, { new: true },
        function( err, shark){
            if( err ){ 
                console.log('Error: ', err); 
                res.render('getshark', {
                        sharks: sharks
             });
            }
            res.redirect('/sharks/getshark' + shark._id);
        });
};