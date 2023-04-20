const express = require('express');

const router = express.Router();

router.get('/', (_, res)=>{
    res.render('perfil/index', {
        nomeCompleto:'Felipe Rogerio de Almeida',
        idade: 27,
    });
});

module.exports = router;