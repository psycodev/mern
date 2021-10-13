//creamos las funciones las cuales van ejecutar el crud con el objeto productos
//importamos el ProductosSchema definiendo la constante y llamandolo desde la ruta
const ProductosSchema = require('../models/productos')
//definimos la funcion que va a listar los productos (get)
const getProductos = async (req,res) => {
        //creamos la funcion que va a listar los productos
        //encapsulamos todo en un try catch para verificar si hay algun error nos muestre en pantalla
        try{ //instaciamos la variable donde se va a amacenar la solicitudes para listar los productos se va a usar ProductosSchema.find(req.body.id)
            let productos = await ProductosSchema.find();
        //pedimos qeu nos retorne la lista de los objetos almacenados 
        res.json({msg: productos });}
        //y si no que nos muestre el error por consola
        catch (err){
            console.log(err)
        }
        
        
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
const updateProducto = async (req,res) => {
    if(typeof req.body != 'undefined'){
     //creamos la funcion que va a listar los productos
        //encapsulamos todo en un try catch para verificar si hay algun error nos muestre en pantalla
        try{ //llamamos la variable que va a realizar la busqeuda y el update del producto deseado (findOneAndUpdate), este producto es llamado por su ID
            await ProductosSchema.findOneAndUpdate(
                //declaramos en un jso los parametros de la busqeuda del id 
                {_id: req.body.id},
                //en otro json declaramos los valores que deseamos modificar del schema y le pedimos qeu los remplaza por lso ingresados en el body
                {
                    descripcion: req.body.descripcion,
                    valorUnit: req.body.valorUnit,
                    estado: req.body.estado 
                }

            );
        //pedimos qeu nos retorne la lista de los objetos almacenados 
        res.json({msg: "producto actualizado con exito" + req.body.id });}
        //y si no que nos muestre el error por consola
        catch (err){
            console.log(err)
        }
    }else{
        res.json({msg: "Los parametros diligenciados no son los correctos, verifique e intente nuevamente"})
    }
}
//definimos la funcion que va a eliminar algun producto (delete)
const deleteProducto = async (req,res) => {
//el if que se crea es para decirle que no me arroje los objetos como undefined
if(typeof req.body != 'undefined'){
    //creamos la funcion que va a realizara la insercion dle nuevo productos
    //encapsulamos todo en un try catch para verificar si hay algun error nos muestre en pantalla
    try{
        //para el delete hay una funcion predeterminada que esta en el schema llamada "findOneAndRemove" y este va a hacer la busqueda por ID
        await ProductosSchema.findOneAndDelete(req.body.id)
    //pedimos qeu nos retorne por un mensaje si el producto fue agregado por
    res.json({msg: 'el producto fue eliminado con exito' + req.body.id});}
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

    

