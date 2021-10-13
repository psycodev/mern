//el objetivo de este archivo definir las operaciones del servidor atravez de las url 
//vamos a requerir express con el fin de que nos ayude a definir las rutas
const {Router} = require ('express');
//definimos el metodo router el cual no devolver un objeto que nos ayudara a guardar rutas
const router = Router(); 
//importamos la ruta de los controladores las
const {ventasControl}= require("../controles");
//creamos la ruta para llamar a la verificion de ventas
const verificacionProductos = require ("../middlewares/verificacion.productos")
//establecemos el router.get el cual listara todos los resultados obtenidos de los objetos almacenados
 //llamamos el metodo getVentas qeu se hizo en el arvhico de controlardores (ventasControl.getVentas)
router.get('/',ventasControl.getVentas);
//establecemos el router.post el cual  agregara a  el objeto isertado por el usuaario a los almacenados
//llamamos el metodo createVenta  qeu se hizo en el arvhico de controlardores
router.post('/', verificacionProductos, ventasControl.createVenta);  
//establecemos el router.put el cual modificara  los resultados solicitados por el usuario de los objetos que estan almacenados
//llamamos el metodo updateVenta  qeu se hizo en el arvhico de controlardores
router.put('/', ventasControl.updateVenta);
//establecemos el router.delete el cual  eliminara  todos los resultados solicitados por el usuario en los objetos almacenados
//llamamos el metodo deleteVenta  qeu se hizo en el arvhico de controlardores
router.delete('/',  ventasControl.deleteVenta);
  
module.exports = router;