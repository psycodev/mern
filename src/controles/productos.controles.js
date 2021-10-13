//creamos las funciones las cuales van ejecutar el crud con el objeto productos
//importamos el ProductosSchema definiendo la constante y llamandolo desde la ruta
const ProductosSchema = require('../models/productos')
//definimos la funcion que va a listar los productos (get)
const getProductos = (req,res) => {
    
}
//definimos la funcion que va a crear un nuevo producto (post)
//el async y el await son fuciones qeu sirven para decirle al servidor que no resuleva la funcion antes o depues del tiempo de carga de la conexion de la base de datos 
const createProducto = async (req,res) =>  {
    //el if que se crea es para decirle que no me arroje los objetos como undefined
    if(typeof req.body != 'undefined'){
    //llamamos un console log para verificar que pasa en el req.body
    console.log(console.log(req.body))
    //instaciamos la variable donde se va a amacenar la solicitudes
    let producto =new ProductosSchema(req.body);
    //creamos la funcion que va a realizara la insercion dle nuevo productos
    //encapsulamos todo en un try catch para verificar si hay algun error nos muestre en pantalla
    try{ await producto.save();
    //pedimos qeu nos retorne por un mensaje si el producto fue agregado por
    res.json({msg: 'el producto fue agregado con exito' + producto.id});}
    catch (err){
        console.log(err)
    }
    //el else es para mostrar un error al usuario de que los parametros solicitados se diligenciaron mal
    }else{
        res.json({msg: "Los parametros diligenciados no son los correctos, verifique e intente nuevamente"})
    }
}
//definimos la funcion que va a modificar  los datos de algun productos (put)
const updateProducto = (req,res) => {


}
//definimos la funcion que va a eliminar algun producto (delete)
const deleteProducto = async (req,res) => {

//el if que se crea es para decirle que no me arroje los objetos como undefined

if(typeof req.body != 'undefined'){
    //creamos la funcion que va a realizara la insercion dle nuevo productos
    //encapsulamos todo en un try catch para verificar si hay algun error nos muestre en pantalla
    try{
        //para el delete hay una funcion predeterminada que esta en el schema llamada "findOneAndRemove" y este va a hacer la busqueda por ID
        await ProductosSchema.findOneAndRemove(req.body.id)
    //pedimos qeu nos retorne por un mensaje si el producto fue agregado por
    res.json({msg: 'el producto fue eliminado con exito' + producto.id});}
    catch (err){
        console.log(err)
    }
    //el else es para mostrar un error al usuario de que los parametros solicitados se diligenciaron mal
    }else{
        res.json({msg: "Los parametros diligenciados no son los correctos, verifique e intente nuevamente"})
    }
    
}

//exportamos las funciones creadas anteriormente 
module.exports.getProductos = getProductos;
module.exports.createProducto = createProducto;   
module.exports.updateProducto = updateProducto;  
module.exports.deleteProducto = deleteProducto;    

    

