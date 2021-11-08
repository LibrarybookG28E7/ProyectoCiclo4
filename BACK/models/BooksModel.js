const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
    isbn: String,
    titulo: String,
    autores: Array,
    año: Number,
    costo: Number,
});

module.exports = mongoose.model("books", booksSchema);