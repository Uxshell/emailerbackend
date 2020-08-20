
const { Router } = require('express');
//const {getListas} = require('../controllers/listas');
//const { check } = require('express-validator');
//const { validarCampos } = require('../middlewares/validar-campos');

//const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getBlacks, crearBlack, borrarBlack
  } = require('../controllers/black')


const router = Router();

router.get( '/', getBlacks);
router.post( '/',crearBlack);

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
    borrarBlack
);




module.exports = router;
