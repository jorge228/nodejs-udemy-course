const { Router } = require('express');
const { check } = require('express-validator');

const { validateInputUser, validateJWT, isAdminRole, hasRole } = require('../middlewares');

const { isValidRole, existsMail, existsUserById } = require('../helpers/validators-db');

const { userGet, userPost, userPut, userDelete } = require('../controllers/user.controller');

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

router.put('/:id', [
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(existsUserById),
    check('role').custom(isValidRole),
    validateInputUser
], userPut);

router.delete('/:id', [
    validateJWT,
    // isAdminRole,
    hasRole('ADMIN_ROLE', 'USER_ROLE'),
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(existsUserById),
    validateInputUser
], userDelete);

module.exports = router;