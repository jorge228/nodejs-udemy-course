const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const validateJWT = async (req = request, res = response, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No existe token en la petición'
        });
    }

    try {

        // const payload = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        // console.log(payload);

        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        // req.uid = uid;
        const user = await User.findById(uid);

        // verify user exists
        if (!user) {
            return res.status(401).json({
                msg: 'Token no válido - Usuario no existe'
            });
        }

        // verify status 
        if (!user.status) {
            return res.status(401).json({
                msg: 'Token no válido - Usuario status false'
            });
        }

        req.user = user;
        
        next();

    } catch (error) {

        console.log(error);
        return res.status(401).json({
            msg: 'Token no válido'
        });

    }
}

module.exports = {
    validateJWT
}