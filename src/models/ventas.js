//en este archivo vasmo a realizar el schema o la tabla con la que vamos a ingresar los datos de nuetra bd
//importamos por medio deu una funcion el mongoose
const mongoose = require('mongoose');
//creamos la funcion qeu va a almacenar nuestro Schema
const Schema = mongoose.Schema;
//creamos el schema con los datos que va a teners
const VentasSchema = Schema ({
    fecha: Date,
    valor: Number,
    cantidadProd: Number,
    documentoCLiente: Number,
    nombreCliente: String, 
    nombreVendedor: String,
    documentoVendedor: Number
    
})

module.exports = mongoose.model ('ventas', VentasSchema);
