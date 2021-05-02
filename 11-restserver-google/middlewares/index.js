const validateInputUser = require('./validate-input-user');
const validateJWT = require('./validate-jwt');
const validateRoleUser = require('./validate-role-user');

module.exports = {
    ...validateInputUser,
    ...validateJWT,
    ...validateRoleUser
}