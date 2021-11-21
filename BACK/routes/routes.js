const { Router } = require("express");
const express = require("express");
const router = express.Router();
const BooksController = require ("../controllers/BooksController");
const UsersController = require ("../controllers/UsersController");

//Rutas Books-------------------
router.get('/books/all', BooksController.getAll);

//Rutas Users-------------------
router.post('/users/new', UsersController.insertuser);

//Rutas Borrows-----------------




module.exports = router;