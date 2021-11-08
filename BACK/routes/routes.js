const { Router } = require("express");
const express = require("express");
const router = express.Router();
const BooksController = require ("../controllers/BooksController");

//Rutas Books-------------------
router.get('/books/all', BooksController.getAll);

//Rutas Users-------------------


//Rutas Borrows-----------------




module.exports = router;