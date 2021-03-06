const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/auth.controller');
const { validateInputUser } = require('../middlewares/validate-input-user');

const router = Router();

router.post('/login', [
    check('mail', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').notEmpty(),
    validateInputUser
], login);

module.exports = router;