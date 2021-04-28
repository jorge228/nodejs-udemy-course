const Role = require('../models/role');

const isValidRole = async (role = '') => {
    const isRole = await Role.findOne({ role });
    if (!isRole) throw new Error(`El rol ${role} no existe`);
}

module.exports = {
    isValidRole
}