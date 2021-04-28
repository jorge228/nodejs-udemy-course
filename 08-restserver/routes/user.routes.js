const { Router } = require('express');
const { check } = require('express-validator');

const { userGet, userPost, userPut, userDelete } = require('../controllers/user.controller');

const { isValidRole, existsMail } = require('../helpers/validators-db');
const { validateInputUser } = require('../middlewares/validation-input-user');

const router = Router();

router.get('/', userGet);

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('mail', 'El correo no es válido').isEmail(),
    check('mail').custom(existsMail),
    check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
    // check('role', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom(isValidRole),
    validateInputUser
], userPost);

router.put('/:id', userPut);

router.delete('/', userDelete);

module.exports = router;