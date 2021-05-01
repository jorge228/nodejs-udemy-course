// help you with typed
const { response } = require('express');
const bycriptjs = require('bcryptjs');

const User = require('../models/user');

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

        res.json({
            msg: 'login OK'
        });

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            msg: 'Error'
        });

    }


}

module.exports = {
    login
}