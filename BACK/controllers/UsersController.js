const UsersModel = require ("../models/UsersModel");
const jwt = require ("jsonwebtoken");

//metodo para crear token para registrar e iniciar sesion de usuario
const maxAge = 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: maxAge});
};


module.exports = class UsersController{
    //creacion de usuario
    static async insertuser (request, response){
        try {
            const document = request.body;
            const user = await UsersModel.create(document);
            const token = createToken(user._id);
            response.cookie("jwt", token, {httpOnly: true, maxAge: maxAge*1000});
            response.status(201).json(user);

        } catch (error) {
            response.status(400).json({message: error.message});
        }
    };

    //iniciar sesion de usuario
    static async login (request, response){
        try {
            const document = request.body;
            const user = await UsersModel.login(document);
            const token = createToken(user._id);
            response.cookie("jwt", token, {httpOnly: true, maxAge: maxAge*1000});
            response.status(201).json({user});

        } catch (error) {
            response.status(400).json({message: error.message});
        }
    };

    //cerrar sesion de usuario
    static async logout (request, response) {
        response.cookie("jwt", "", {maxAge: 1});
    };
}