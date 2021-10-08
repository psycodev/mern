//el objetivo de este archivo definir las operaciones del servidor atravez de las url 
//vamos a requerir express con el fin de que nos ayude a definir las rutas
const express = require('express');
//definimos el metodo router el cual no devolver un objeto que nos ayudara a guardar rutas
const router = express.Router ();
//vamos a definir las rutas de uestro servidor hacendo la prueba con un hello world
//el 'req, res' es el manejador de eventos de node js
router.get('/', (req, res) => {
    res.send('hello world');
});

module.exports = router;