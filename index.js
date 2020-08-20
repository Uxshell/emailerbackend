const express = require('express');
const app = express();
//----------------------------------------------
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
//----------------------------------------------

const { config } = require('./config/index');
const {dbConnection} = require('./config/database');
const routesApi = require('./routes/routes.js');
const routesUserApi = require('./routes/routesUsers.js');
const routesClientApi = require('./routes/routesClients.js');
const routesCampaignsApi = require('./routes/routesCampaign');
const routesListas = require('./routes/listas');
//const routesListApi = require('./routes/routesLists');
var cors = require('cors')
var fileupload = require("express-fileupload");
require('dotenv').config({path:'.env'});
//body parser
app.use(express.json());
app.use(cors())
app.use(fileupload());
app.use('/api/listas', require('./routes/listas'));
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/blacks', require('./routes/blacks'));
/*app.get('/api/listas',(req, res)=>{
    res.json({
        ok:true
    });
});*/
dbConnection();
routesApi(app);
routesUserApi(app);
routesClientApi(app);
routesCampaignsApi(app);

//routesListApi(app);

/*app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
});*/