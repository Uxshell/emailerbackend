
const { Router } = require('express');
//const {getListas} = require('../controllers/listas');
//const { check } = require('express-validator');
//const { validarCampos } = require('../middlewares/validar-campos');

//const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getListas, crearLista, borrarLista
  } = require('../controllers/listas')


const router = Router();

router.get( '/', getListas);
router.post( '/',crearLista);

/*router.put( '/:id',
    [
        validarJWT,
        check('nombre','El nombre del hospital es necesario').not().isEmpty(),
        validarCampos
    ],
    actualizarHospital
);
*/
router.delete( '/:id',
    //validarJWT,
    borrarLista
);




module.exports = router;
