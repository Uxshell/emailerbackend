const { Schema, model } = require('mongoose');
//const MongoLib = require('../lib/mongo');
const { config } = require('../config');


//this.mongoDB = new MongoLib();
const BlackSchema = Schema({
     
    nombre: {
        type: String,
        required: true
    },
    fechaCreacion:{
        type: String,
        require: false
    },
    clientesAfectados:{
        type: String
    },
    descripcion:{
        type: String
    }
  
}, {  collection: 'black' });


BlackSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Black', BlackSchema );
