// <------- Imports ------->

const bcrypt = require("bcrypt");
const { request } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../user/userModel");

// <------- Bcrypt Function ------->

exports.hashPass = async ( req, res, next ) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}

exports.hashPass2 = async ( req, res, next ) => {
    try {
        console.log(req.body.update.password)
        req.body.update.password = await bcrypt.hash(req.body.update.password, 8);
        next();
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}

exports.tokenCheck = async ( req, res, next ) => {
    try {
        const token = req.header("Authorization");
        const decodedToken = await jwt.verify(token, process.env.SECRET);
        const user = await User.findById(decodedToken._id);
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: error.message });
    }
}

exports.comparePassword = async ( req, res, next) => {
    try {
        req.user = await User.findOne({username: req.body.username})
        if (req.user && await bcrypt.compare(req.body.password, req.user.password)) {
            next()
        }
        else {
            throw new Error ("Incorrect username, email or password")
        }
        next()
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: error.message });
    }
}