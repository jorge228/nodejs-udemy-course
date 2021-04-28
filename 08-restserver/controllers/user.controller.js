const { response } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const userGet = (req, res = response) => {
    const { name, age, nif = 2234554, page, limit } = req.query;
    res.json({
        msg: 'get from API - controller',
        name,
        age,
        nif,
        page,
        limit
    });
}

const userPost = async (req, res) => {
    const { name, mail, password, role } = req.body;
    const user = new User({ name, mail, password, role });
    
    // encrypt pass
    const salt = bcrypt.genSaltSync(5);
    user.password = bcrypt.hashSync(password, salt);

    // validation
    // if (await User.findOne({ mail })) return res.status(400).json({
    //     msg: 'El correo ya está usado'
    // });

    await user.save();
    res.status(201).json({
        msg: 'post from API - userController',
        user
    });
}

const userPut = (req, res) => {
    const { id } = req.params;
    res.status(400).json({
        msg: 'put from API - controller',
        id
    });
}

const userDelete = (req, res) => {
    res.json({
        msg: 'delete from API - controller'
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}