//creamos las funciones las cuales van ejecutar el crud con el objeto productos

//definimos la funcion que va a listar los productos (get)
const getProductos = (req,res) => {
    //probamos qeu productosControl.getProductos() que se creo en la ruta se ejecute correcamente
 //le solitimos que como repsuesta envie un mensaje en la pantalla
 res.json ({msg:"Estos son los productos ingresados"})

}
//definimos la funcion que va a crear un nuevo producto (post)
const createProducto = (req,res) => {

}
//definimos la funcion que va a modificar  los datos de algun productos (put)
const updateProducto = (req,res) => {

}
//definimos la funcion que va a eliminar algun producto (delete)
const deleteProducto = (req,res) => {

}

//exportamos las funciones creadas anteriormente 
module.exports.getProductos = getProductos;
module.exports.createProducto = createProducto;   
module.exports.updateProducto = updateProducto;  
module.exports.deleteProducto = deleteProducto;    

    

