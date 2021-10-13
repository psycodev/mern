//creamos las funciones las cuales van ejecutar el crud con el objeto ventas
//importamos el VentasSchema definiendo la constante y llamandolo desde la ruta
const VentasSchema = require('../models/ventas')
//definimos la funcion que va a listar las ventas (get) como parametro le indicamos que va a recibir el req res
const getVentas = async (req,res) => {
 
//creamos la funcion que va a listar los productos
        //encapsulamos todo en un try catch para verificar si hay algun error nos muestre en pantalla
        try{ //instaciamos la variable donde se va a amacenar la solicitudes para listar lass ventas se va a usar VentasSchema.find(req.body.id)
            let ventas = await VentasSchema.find();
        //pedimos qeu nos retorne la lista de los objetos almacenados 
        res.json({msg: ventas });}
        //y si no que nos muestre el error por consola
        catch (err){
            console.log(err)
        }

}
//definimos la funcion que va a crear una nueva venta (post)
const createVenta = async (req,res) => {
    
//el if que se crea es para decirle que no me arroje los objetos como undefined
if(typeof req.body != 'undefined'){
    //llamamos un console log para verificar que pasa en el req.body
    console.log(console.log(req.body))
    //instaciamos la variable donde se va a amacenar la solicitudes
    let venta =new VentasSchema(req.body);
    //creamos la funcion que va a realizara la insercion dle nuevo productos
    //encapsulamos todo en un try catch para verificar si hay algun error nos muestre en pantalla
    try{ await venta.save();
    //pedimos qeu nos retorne por un mensaje si el producto fue agregado por
    res.json({msg: 'el registro de la venta fue agregada con exito' + venta.id});}
    catch (err){
        console.log(err)
    }
    //el else es para mostrar un error al usuario de que los parametros solicitados se diligenciaron mal
    }else{
        res.json({msg: "Los parametros diligenciados no son los correctos, verifique e intente nuevamente"})
    }

}
//definimos la funcion que va a modificar  los datos de alguna venta (put)
const updateVenta  = async (req,res) => {
   
    if(typeof req.body != 'undefined'){
        //creamos la funcion que va a listar los productos
           //encapsulamos todo en un try catch para verificar si hay algun error nos muestre en pantalla
           try{ //llamamos la variable que va a realizar la busqeuda y el update del producto deseado (findOneAndUpdate), este producto es llamado por su ID
               await VentasSchema.findOneAndUpdate(
                   //declaramos en un jso los parametros de la busqeuda del id 
                   {_id: req.body.id},
                   //en otro json declaramos los valores que deseamos modificar del schema y le pedimos qeu los remplaza por lso ingresados en el body
                   {
                    fecha: req.body.fecha,
                    valor: req.body.valor,
                    cantidadProd: req.body.cantidadProd,
                    documentoCLiente: req.body.documentoCLiente,
                    nombreCliente: req.body.nombreCliente,
                    nombreVendedor: req.body.nombreVendedor,
                    documentoVendedor: req.body.documentoCLiente
                   }
               );
           //pedimos qeu nos retorne la lista de los objetos almacenados 
           res.json({msg: "venta  actualizada con exito" + req.body.id });}
           //y si no que nos muestre el error por consola
           catch (err){
               console.log(err)
           }
       }else{
           res.json({msg: "Los parametros diligenciados no son los correctos, verifique e intente nuevamente"})
       }

}
//definimos la funcion que va a eliminar alguna venta (delete)
const deleteVenta  = async (req,res) => {

//el if que se crea es para decirle que no me arroje los objetos como undefined
if(typeof req.body != 'undefined'){
    //creamos la funcion que va a realizara la insercion dle nuevo productos
    //encapsulamos todo en un try catch para verificar si hay algun error nos muestre en pantalla
    try{
        //para el delete hay una funcion predeterminada que esta en el schema llamada "findOneAndRemove" y este va a hacer la busqueda por ID
        await VentasSchema.findOneAndDelete(req.body.id)
    //pedimos qeu nos retorne por un mensaje si el producto fue agregado por
    res.json({msg: 'la venta fue eliminada con exito' + req.body.id});}
    catch (err){
        console.log(err)
    }
    //el else es para mostrar un error al usuario de que los parametros solicitados se diligenciaron mal
    }else{
        res.json({msg: "Los parametros diligenciados no son los correctos, verifique e intente nuevamente"})
    }

}

//exportamos las funciones creadas anteriormente 
module.exports.getVentas = getVentas;
module.exports.createVenta = createVenta;   
module.exports.updateVenta = updateVenta;  
module.exports.deleteVenta = deleteVenta;    



