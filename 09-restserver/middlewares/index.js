const validateInputUser = require('../middlewares/validate-input-user');
const validateJWT = require('../middlewares/validate-jwt');
const validateRoleUser = require('../middlewares/validate-role-user');

module.exports = {
    ...validateInputUser,
    ...validateJWT,
    ...validateRoleUser
}