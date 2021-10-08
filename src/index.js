//este primer archivo no permite iniciar e inicializar nuestro servidor

//se crea una constante para usar expres: 
const express = require ('express');
//se crea una constante para usar el modulo morgan 
const morgan = require('morgan');
//se crear una constante que guarde el objeto que regresa cuando apliquemos el required express, este sera el servidor
const app = express ();

//se crearan las secciones con las qeu se va a trabjar
//settings o configuracion: 
//primeramente vamos a configurar el acceso al servidor estableciendo la configuracion del puerto
//usamos  process.env.   para solicitar el puerto que da la nube de lo contrario usamos || para determinar que peurto queremos usar
app.set ('port', process.env.PORT|| 3000);
//middleware son funciones que se ejecutan antes de llegar a la ruta 
//vamos a declarar el uso de el modulo morgan y se ejecutara como una funcion con un parametro dev 
//MORGAN:es un modulo que nos permite ver en consola las peticiones que estan llegando desde el navegador o como peticines del cliente
app.use (morgan('dev'));
//express.json: cada vez que llegue un dato al servidor este modulo va  acomprobar si es un archivo json
//y asi podamos acceder a el en nuestro codigo del servidor y tambien vamos a poder enviar nuestro codigo json
app.use (express.json());

//routes las  rutas qeu tendra el servidor por
//aca fijamos el nombre de las rutas qeu vamos a usar
//en este primer caso definimos la ruta de api/task
//en esta primera ruta se va a definir la direccion de el res api la cual es una direccion en donde react va a poder hacer peticiones de crud y etc

app.use('api/tasks' ,require('./routes/task.routes')); 

//archivos staticos: aca se le dira al servidor donde encontrar los arvhicos estaticos (en la carpeta public)

//iniciar servidor

//se declara un listen para decirle al servidor que escuche al puerto establecido en este caso el puesto 3000
//con (app.get('port'), solicitamos elpuerto que establecimos anteriormente
app.listen (app.get('port'), ()=>{
//se le solicita qeu escriba un mensaje por consola para verificar qeu el servidor esta escuchando y esta emitiendo al puerto
    console.log(`Server om port ${app.get('port')}`);
});
//se escribe el comando "node src/index.js" en la consola para verificar si todo quedo biens