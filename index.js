//este primer archivo no permite iniciar e inicializar nuestro servidor

//se crea una constante para usar expres: 
const express = require ('express');
//se crear una constante que guarde el objeto que regresa cuando apliquemos el required express, este sera el servidor
const app = express ();

//se crearan las secciones con las qeu se va a trabjar
//settings o configuracion: 

//middleware son funciones que se ejecutan antes de llegar a la ruta 

//routes las  rutas qeu tendra el servidor por
 
//archivos staticos: aca se le dira al servidor donde encontrar los arvhicos estaticos (en la carpeta public)

//iniciar servidor

//se declara un listen para decirle al servidor que escuche al puerto establecido en este caso el puesto 3000
app.listen (3000, ()=>{
//se le solicita qeu escriba un mensaje por consola para verificar qeu el servidor esta escuchando y esta emitiendo al puerto
    console.log('servidor esta funcionando en el puerto 3000');
});
//se escribe el comando "node src/index.js" en la consola para verificar si todo quedo biens