//este primer archivo no permite iniciar e inicializar nuestro servidor

//se crea una constante para usar expres: 
const express = require ('express');
//se crear una constante que guarde el objeto que regresa cuando apliquemos el required express, este sera el servidor
const app = express ();
//se declara un listen para decirle al servidor que escuche al puerto establecido en este caso el puesto 3000
app.listen (3000, ()=>{
//se le solicita qeu escriba un mensaje por consola para verificar qeu el servidor esta escuchando y esta emitiendo al puerto
    console.log('servidor esta funcionando en el puerto 3000');
});
//se escribe el comando "node src/index.js" en la consola para verificar si todo quedo biens