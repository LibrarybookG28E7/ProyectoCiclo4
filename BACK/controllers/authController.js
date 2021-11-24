



module.exports.postRegistrar = async (req, res) => {
    console.log("postRegistrar");
    res.send("postRegistrar");
};

module.exports.postIniciarSesion = async (req, res) => {
    console.log("postIniciarSesion");
    res.send("postIniciarSesion");
};

module.exports.postCerrarSesion = async (req, res) => {
    console.log("postCerrarSesion");
    res.send("postCerrarSesion");
};
