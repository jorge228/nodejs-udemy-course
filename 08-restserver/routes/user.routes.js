const { Router } = require('express');
const { check } = require('express-validator');

const { userGet, userPost, userPut, userDelete } = require('../controllers/user.controller');

const router = Router();

router.get('/', userGet);

router.post('/', [
    check('mail', 'El correo no es válido').isEmail()
], userPost);

router.put('/:id', userPut);

router.delete('/', userDelete);

module.exports = router;