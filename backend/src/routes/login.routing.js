const {Router}= require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos.middleware');
const { login } = require('../controllers/login.controller');
const router = Router();

router.post('/login',[ check('par_email', ' el email es requerido').not().isEmpty(),
                                    check('par_email', ' el formato de email no es valido').isEmail().normalizeEmail(),
                                    check('par_contrasenia', 'formato de email no valido').not().isEmpty(),
                                    check('par_contrasenia','la contraseña tiene que tener almenos 5 caracteres').isLength({min:5}), validarCampos],login);

module.exports = router;