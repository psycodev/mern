//este primer archivo no permite iniciar e inicializar nuestro servidor

//se crea una constante para usar expres: 
const express = require ('express');
//se crear una constante que guarde el objeto que regresa cuando apliquemos el required express, este sera el servidor
const app = express ();
//creamos una constante qeu llame la ruta de los routers 
const routers = require('./routes'); 
//se crea una constante para usar el modulo morgan 
const morgan = require('morgan');
//se crea una constante para importa moongose
const mongoose = require ('mongoose');
//importamos la configuracion de mongoosej que esat en la carrpeta config.database
const dbConfig = require('./config/database'); 
//vamos a declarar la configuracion con mongoose
mongoose.connect(dbConfig.dbStringConnect)
//este then catch nos ayudara a visualizrar por consola si la conexion a bd fue realizada o si hayalgun error
.then(db=> console.log ("la base de datos esta conectada"))
.catch(err=> console.error(err))
//realizamos la conexion con la base de datos
const conn =mongoose.conecction;
//vamos a declarar el uso de el modulo morgan y se ejecutara como una funcion con un parametro dev 
//MORGAN:es un modulo que nos permite ver en consola las peticiones que estan llegando desde el navegador o como peticines del cliente
app.use (morgan('dev'));
//creamos una constante qeu guarde el pruerto qeu vamos ausar
const port = 3010;
//se crear un funcion app.get para que por medio de un req,res obtengamos un mensje de informacion que sera visualizado por pantalla
app.get('/', (req, res)=>{
   //este es el mensaje que vamos a solicitar qeu se devuelva al usuario cuando entre a la pagina principal del server
   //el mensaje estara en un paquete json 
   res.json({status: 200});

})

//routes las  rutas qeu tendra el servidor por
//aca fijamos el nombre de las rutas qeu vamos a usar
//en este primer caso definimos la ruta de api/task
//en esta primera ruta se va a definir la direccion de el res api la cual es una direccion en donde react va a poder hacer peticiones de crud y etc
//esatbelcemos la ruta de donde va a llamar la informaciond e producto
app.use('/productos', routers.productosRouters);
//establecemos la ruta de donde va a llamar la infomracion de ventas
app.use('/ventas', routers.ventasRouters);

//archivos staticos: aca se le dira al servidor donde encontrar los arvhicos estaticos (en la carpeta public)

//iniciar servidor

//se declara un listen para decirle al servidor que escuche al puerto establecido en este caso el puesto 3000
//port es el peurto qeu estableciomos con el valor determinado en la constante
app.listen(port,()=>{
//se le solicita qeu escriba un mensaje por consola para verificar qeu el servidor esta escuchando y esta emitiendo al puerto
    console.log(`listening on port http://localhost:${port}`);
});
//se escribe el comando "node src/index.js" en la consola para verificar si todo quedo biens



