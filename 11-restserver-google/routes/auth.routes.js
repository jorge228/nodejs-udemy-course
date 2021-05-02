const { Router } = require('express');
const { check } = require('express-validator');

const { login, googleSignIn } = require('../controllers/auth.controller');
const { validateInputUser } = require('../middlewares/validate-input-user');

const router = Router();

router.post('/login', [
    check('mail', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').notEmpty(),
    validateInputUser
], login);

router.post('/google', [
    check('id_token', 'El id_token es necesario').notEmpty(),
    validateInputUser
], googleSignIn);

module.exports = router;