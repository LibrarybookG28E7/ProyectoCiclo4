const mongoose = require ("mongoose");
const {isEmail} = require ("validator");
const bcrypt = require ("bcrypt");

//esquema users
const usersSchema = mongoose.Schema({
        firstname: String,
        lastname: String,
        identitynumber: Number,        
        email: {
                type: String,
                required: [true, "Por favor ingrese su email."],
                unique: [true, "Este email ya se encuentra registrado, ingresa con tu password"],
                lowercase: true,
                validate: [isEmail, "El email escrito no es válido."],
        },
        password: {
                type: String,
                required: [true, "Por favor ingrese su password."],
                minlength: [10, "El largo minimo de la contraseña es de 10 caracteres."],                
        },
});

//encriptacion contraseña
usersSchema.pre("save", async function (next) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
        next();
});


//login
usersSchema.statics.login = async function ({email, password}) {
        const user = await users.findOne ({email: email});
        if (user) {
                const autorizado = await bcrypt.compare(password, user.password);
                if (autorizado) {
                        return user._id;
                } else {
                        throw error ("login: Contraseña incorrecta!");
                }
        } else {
                throw error ("login: Email incorrecto!");
        }
};

const users = mongoose.model("users", usersSchema);

module.exports = mongoose.model("users", usersSchema);