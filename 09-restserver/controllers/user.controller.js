const { response } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const userGet = async (req, res) => {

    // const { name, age, nif = 2234554, page, limit } = req.query;
    const { from = 0, limit = 5 } = req.query;
    const query = { status: true };

    // const users = await User.find(query)
    //     .skip(Number(from))
    //     .limit(Number(limit));
    // const count = await User.countDocuments();

    const [users, total] = await Promise.all([
        User.find(query)
            .skip(Number(from))
            .limit(Number(limit)),
        User.countDocuments(query)
    ]);

    res.json({
        msg: 'get from API - controller',
        total,
        users
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

const userPut = async (req, res) => {
    const { id } = req.params;
    const { _id, password, google, mail, ...moreBody } = req.body;

    if (password) {
        // encrypt pass
        const salt = bcrypt.genSaltSync(5);
        moreBody.password = bcrypt.hashSync(password, salt);
    }

    await User.findByIdAndUpdate(id, moreBody);
    const userUpdate = await User.findById(id);

    res.status(200).json({
        msg: 'put from API - controller',
        userUpdate
    });
}

const userDelete = async (req, res) => {
    const { id } = req.params;

    // delete user from db
    // const user = await User.findByIdAndDelete(id); 
    const user = await User.findByIdAndUpdate(id, { status: false });
    res.json({
        msg: 'delete from API - controller',
        user
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}