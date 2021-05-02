// help you with typed
const { response, request } = require('express');
const bycriptjs = require('bcryptjs');

const User = require('../models/user');
const { generateJWT } = require('../helpers/generate-jwt');
const { googleVerify } = require('../helpers/google-verify');

const login = async (req, res = response) => {

    const { mail, password } = req.body;

    try {
        // verify mail exists
        const user = await User.findOne({ mail });
        if (!user) {
            return res.status(400).json({
                msg: 'Usuario o contraseña incorrecto -> correo'
            });
        }

        // verify status user
        if (!user.status) {
            return res.status(400).json({
                msg: 'Usuario o contraseña incorrecto -> status false'
            });
        }

        // verify password
        const validPassword = bycriptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario o contraseña incorrecto -> password'
            });
        }

        // generate JWT
        const token = await generateJWT(user.id);

        res.json({
            msg: 'login OK',
            user,
            token
        });

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            msg: 'Error'
        });

    }

}

const googleSignIn = async (req = request, res = response) => {

    const { id_token } = req.body;

    try {

        const { name, mail, img } = await googleVerify(id_token);

        let user = await User.findOne({ mail });

        if (!user) {
            // create user if not exists with google
            const data = { name, mail, img, password: ':)', google: true };
            user = new User(data);
            await user.save();
        }

        // if user deleted
        if (!user.status) {
            return res.status(401).json({
                msg: 'Hable con el administrador - Usuario bloqueado'
            });
        }

        // generate JWT
        const token = await generateJWT(user.id);

        res.json({
            msg: 'login Google SignIn',
            user,
            token
        });

    } catch (error) {

        res.status(400).json({
            msg: 'Token de Google no válido'
        });

    }
}

module.exports = {
    login,
    googleSignIn
}