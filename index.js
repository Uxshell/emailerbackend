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
const { dbConnection } = require('./database/config');
const { config } = require('./config/index');
const routesApi = require('./routes/routes.js');
const routesUserApi = require('./routes/routesUsers.js');
const routesClientApi = require('./routes/routesClients.js');
const routesCampaignsApi = require('./routes/routesCampaign');
var cors = require('cors')
var fileupload = require("express-fileupload");
const{MongoLib} = require('./lib/mongo');
//body parser
app.use(express.json());
app.use(cors())
app.use(fileupload());
dbConnection();

routesApi(app);
routesUserApi(app);
routesClientApi(app);
routesCampaignsApi(app);

app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
});