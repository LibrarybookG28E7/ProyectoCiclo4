const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const apiRoutes = require("./routes/apiRoutes");
const { requireAuth } = require("./middleware/authMiddleware");

require("dotenv").config();
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

const port = process.env.PORT;

const app = express();

app.listen(port, () => {
  console.log(`Servidor escuchando a traves de http://localhost:${port}`);
})

mongoose.connect(process.env.URI_DB)
    .then(() => console.log("Conexión establecida con la base de datos!"))
    .catch(err => console.error(err));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/auth", authRoutes);
app.use("/api", requireAuth, apiRoutes);
