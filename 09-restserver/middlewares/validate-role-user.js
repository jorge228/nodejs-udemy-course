const { request, response } = require("express");

const isAdminRole = (req = request, res = response, next) => {

    if (!req.user) {
        return res.status(500).json({
            msg: 'Se quiere verificar el role sin haber validado el token'
        });
    }

    // this req.user was created and added to request in valiate-jwt (middleware before)
    const { role, name } = req.user;

    if (role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${name} no es administrador - No puede hacer esto`
        });
    }

    next();

}

const hasRole = (...roles) => {

    return (req = request, res = response, next) => {

        if (!req.user) {
            return res.status(500).json({
                msg: 'Se quiere verificar el role sin haber validado el token'
            });
        }

        if (!roles.includes(req.user.rol)) {
            return res.status(401).json({
                msg: `El servicio requiere uno de estos roles: ${roles}`
            });
        }

        next();

    }

}

module.exports = {
    isAdminRole,
    hasRole
}