const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async (role = '') => {
    const isRole = await Role.findOne({ role });
    if (!isRole) throw new Error(`El rol ${role} no existe`);
}

const existsMail = async (mail) => {
    if (await User.findOne({ mail })) throw new Error(`El correo ${mail} ya está registrado`);
}

const existsUserById = async (id) => {
    // const existsUser = await User.findById(id);
    // if (!existsUser) throw new Error(`El usuario con id '${id}' no existe en la basa de datos`);
    if (!await User.findById(id)) throw new Error(`El usuario con id '${id}' no existe en la basa de datos`);
}

module.exports = {
    isValidRole,
    existsMail,
    existsUserById
}