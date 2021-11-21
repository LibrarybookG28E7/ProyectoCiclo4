const mongoose = require ("mongoose");

const usersSchema = mongoose.Schema({
        firstname: String,
        lastname: String,
        identitynumber: Number,
        username: String,
        password: String
});

module.exports = mongoose.model("users", usersSchema);