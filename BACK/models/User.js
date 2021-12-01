const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const usersSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  identitynumber: Number, 
  email: {
    type: String,
    required: [true, "Digita tu email porfavor!"],
    unique: [true, "Este email ya se encuentra registrado."],
    index: true,
    lowercase: true,
    validate: [isEmail, "El email escrito no es válido."],
  },
  password: {
    type: String,
    required: [true, "Digita tu contrasenia porfavor!"],
    minlength: [10, "El largo mínimo de la contrasenia es 10."],
  },
});

// fire a function before doc saved to db
usersSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

usersSchema.statics.login = async function (email, password) {
  const user = await users.findOne({ email: email });
  if (user) {
    const autorizado = await bcrypt.compare(password, user.password);
    if (autorizado) {
      return user._id;
    } else {
      throw Error("login: Contrasenia incorrecta.");
    }
  } else {
    throw Error("login: Correo ingresado no existe.");
  }
};
const users = mongoose.model("users", usersSchema);

module.exports = users;
