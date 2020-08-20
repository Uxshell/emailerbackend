const { Schema, model } = require('mongoose');
//const MongoLib = require('../lib/mongo');
const { config } = require('../config');


//this.mongoDB = new MongoLib();
const ListaSchema = Schema({
     
    nombre: {
        type: String,
        required: true
    },
    fechaCreacion:{
        type: String,
        require: false
    },
    totalClientes:{
        type: String
    }
  
}, {  collection: 'lists' });


ListaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Lista', ListaSchema );
