const express = require('express');
const router = express.Router();
const shark = require('../controllers/sharks');

router.get('/', function(req, res){
    shark.index(req,res);
});

router.post('/addshark', function(req, res) {
    shark.create(req,res);
});

router.get('/getshark', function(req, res) {
    shark.list(req,res);
});

router.post('/sharks/editar', function(req, res) {
    shark.editar(req,res);
});

router.get('/sharks/borrar/:id', function(req, res) {
    shark.borrar(req,res);
});

module.exports = router;
