/*module.exports = {
    'url': 'mongodb://localhost/login'
}*/
const mongoose = require('mongoose');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://michelle:$Trini2818@cluster0.w7b8d.mongodb.net/emailerDB?retryWrites=true&w=majority`;

const dbConnection = async() => {

    try {
        await mongoose.connect( MONGO_URI , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB'+DB_NAME);
        console.log('DB Online....'+MONGO_URI);
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}


module.exports = {
    dbConnection
}
