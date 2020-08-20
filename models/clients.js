const { Schema, model } = require('mongoose');
//const MongoLib = require('../lib/mongo');
const { config } = require('../config');


//this.mongoDB = new MongoLib();
const ClienteSchema = Schema({
     
    IDLISTA: {
        type: String,
        required: true
    },
    NOMBRE: {
        type: String,
        required: true
    },
    

  
}, {  collection: 'clients' });


ClienteSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Cliente', ClienteSchema );
