const express = require('express');

const {Perfil} = require('../models');

const router = express.Router();

Perfil.create([
    {
        nome:"Felipe",
        idade:27
    },

    {
        nome: "David",
        idade: 23
    }
])

router.get('/', (_, res)=>{
    Perfil.find({}).then((pessoa)=>{ 
        res.render('perfil/index', {
            pessoa: pessoa
        });
    });
});



module.exports = router;