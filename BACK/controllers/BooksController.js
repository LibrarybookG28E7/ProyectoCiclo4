const BooksModel = require ("../models/BooksModel");

module.exports = class BooksController {
    static async getAll (request, response) {
        const books = await BooksModel.find();
        response.status(200).json({books});
    }
}