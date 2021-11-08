require("dotenv").config();
const express = require("express");
const cors = require ("cors");
const mongoose = require("mongoose");

const port = process.env.PORT;



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas------------------------------------
app.use('/api', require('./routes/routes'))


//Servidor--------------------------------
app.listen(port, () => {
    console.log(`Servidor escuchanfo a traves de http://localhost:${port}`);
})

//DB MONGO-----------------------------------
mongoose.connect(process.env.URI_DB)
    .then(() => console.log("Conexión establecida con la base de datos!"))
    .catch(err => console.error(err));