const { response } = require('express');
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
    const user = new User(req.body);
    await user.save();
    res.status(201).json({
        msg: 'post from API - controller',
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