const { request } = require("express");
const UsersModel = require("../models/UsersModel");




module.exports = class authController{
    static async postRegistrar (req, res){

        console.log("postRegistrar");
        try {
            console.log(req.body);
            const document = req.body;
            const user = await UsersModel.create(document);
            res.status(201).json(user);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    };
};

module.exports.postIniciarSesion = async (req, res) => {
    console.log("postIniciarSesion");
    res.send("postIniciarSesion");
};

module.exports.postCerrarSesion = async (req, res) => {
    console.log("postCerrarSesion");
    res.send("postCerrarSesion");
};
