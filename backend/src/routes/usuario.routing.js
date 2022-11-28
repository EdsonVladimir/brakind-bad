const {Router}= require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos.middleware');
const { resgitroUsusario, actualizarNombre, actualizarNickname, actualizarImg, obtenerUsuario,verImagen } = require('../controllers/usuario.controller');
const {  emailExiste,
    nicknameExiste } = require('../helpers/validators.helper');
const {validarJWT} = require("../middlewares/validar-jwt.middleware");
const upload = require('../helpers/subir-imagen')
const router = Router();

router.post('/usuario',[check('par_nombre', 'El nombre es requerido').not().isEmpty().trim().escape(),
                                     check('par_nickname', 'el nickname es requerido').not().isEmpty().trim().escape(),
                                     check('par_nickname').custom(nicknameExiste),
                                     check('par_email', 'El email es requerido').not().isEmpty(),
                                     check('par_email').custom(emailExiste),
                                     check('par_email', 'Formato de email no valido').isEmail().normalizeEmail(),
                                     check('par_contrasenia', 'La contraseña es requerida').not().isEmpty(),
                                     check('par_contrasenia','la contraseña tiene que tener almenos 5 caracteres').isLength({min:5}), validarCampos],resgitroUsusario);
router.patch('/usuario-nom', [validarJWT],[check('par_nombre', 'El nombre es requerido').not().isEmpty().trim().escape(),
                                      validarCampos],actualizarNombre);
router.patch('/usuario-nick',[validarJWT], [check('par_nickname', 'el nickname es requerido').not().isEmpty().trim().escape(), check('par_nickname').custom(nicknameExiste),validarCampos], actualizarNickname );
router.patch('/usuario-img/:id',[validarJWT], upload.single('par_img'), actualizarImg);
router.get('/usuario',[validarJWT], obtenerUsuario)
router.get('/imagen/:img', verImagen);

module.exports = router;