const UsersModel = require ("../models/UsersModel");

module.exports = class UsersController{
    static async insertuser (request, response){
        try {
            const document = request.body;
            const user = await UsersModel.create(document);
            response.status(201).json(user);

        } catch (error) {
            response.status(400).json({message: error.message});
        }
    };
}