// <------- Imports ------->

const User = require("./userModel");

// <------- Controllers ------->

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).send({user: newUser});
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
};


exports.readUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send({users: users});
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
}

exports.updateUser = async (req, res) => {
    try {
        await User.updateOne(req.body.filter, {$set: req.body.update});
        res.status(200).send({previousUser: req.body.filter, newUser: req.body.update });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.deleteOne(req.body);
        res.status(200).send({deletedUser: req.body});
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
};
