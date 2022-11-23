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

exports.editar = (req, res)=>{
        const id = req.body.id_editar
        const name = req.body.name_editar
        const character = req.body.character_editar
        Shark.finByIdAndUpdate(id, {name, character}, (error,sharks)=>{
                if(error){
                        return res.status(500).json({
                                message: 'Error al actualizar un shark'
                        })
                }
                res.redirect('/sharks/getshark')
        }) 
};

exports.borrar = (req, res)=>{
        const id = req.params.id
        Shark.finByIdAndRemove(id, (error,sharks)=>{
                if(error){
                        return res.status(500).json({
                                message: 'Error al eliminar un shark'
                        })
                }
                res.redirect('/sharks/getshark')
        }) 
};