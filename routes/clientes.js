const { Router } = require('express');
const {
     getClientes, getClientsbyLista
  } = require('../controllers/client')


const router = Router();
router.get( '/', getClientes);
router.get( '/:id', getClientsbyLista);
module.exports = router;
