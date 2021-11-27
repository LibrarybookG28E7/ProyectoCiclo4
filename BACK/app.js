require("dotenv").config();
const express = require("express");
const cors = require ("cors");
const morgan = require ("morgan");
const cookieParser = require ("cookie-parser");
const mongoose = require("mongoose");

const port = process.env.PORT;



const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//Rutas------------------------------------
app.use('/api', require('./routes/routes'))


//Servidor--------------------------------
app.listen(port, () => {
    console.log(`Servidor escuchando a traves de http://localhost:${port}`);
})

//DB MONGO-----------------------------------
mongoose.connect(process.env.URI_DB)
    .then(() => console.log("Conexión establecida con la base de datos!"))
    .catch(err => console.error(err));