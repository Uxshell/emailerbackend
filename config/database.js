/*module.exports = {
    'url': 'mongodb://localhost/login'
}*/
const mongoose = require('mongoose');
const { config } = require('../config');

const dbConnection = async() => {

    try {
        await mongoose.connect( config.DB_CNN , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}


module.exports = {
    dbConnection
}