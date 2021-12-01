import { useState } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../redux/apiCalls/authApiCalls";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [identitynumber, setIdentitynumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("submit");
    // console.log(email);
    // console.log(password);

    register(dispatch, { firstname, lastname, identitynumber, email, password });
  };

  return (
    <main className="form-signin text-center">
      <form onSubmit={handleSubmit} noValidate>
        <img
          className="mb-4"
          src="http://jwt.io/img/logo-asset.svg"
          alt=""
          width="100"
        />
        <h1 className="h3 mb-3 fw-normal">Porfavor regístrate</h1>

        <div className="form-floating">
          <input
            type="firstname"
            className="form-control"
            id="floatingInput3"
            placeholder="first name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label htmlFor="floatingInput">Nombre</label>
        </div>
        <div className="form-floating">
          <input
            type="lastname"
            className="form-control"
            id="floatingInput4"
            placeholder="last name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <label htmlFor="floatingInput">Apellido</label>
        </div>
        <div className="form-floating">
          <input
            type="identitynumber"
            className="form-control"
            id="floatingInput5"
            placeholder="Identity number"
            value={identitynumber}
            onChange={(e) => setIdentitynumber(e.target.value)}
          />
          <label htmlFor="floatingInput">Numero de documento</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Correo Electrónico</label>
          <p className="text-danger">
            <small>{error.email}</small>
          </p>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className={
              error.password ? "form-control is-invalid" : "form-control"
            }
            id="floatingPassword"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Contraseña</label>
          <p className="text-danger">
            <small>{error.password}</small>
          </p>
        </div>
        {error.password || error.email ? (
          <div className="checkbox mb-3 text-danger fw-bold">
            <small>Error al registrar</small>
          </div>
        ) : null}

        {currentUser ? (
          <div className="checkbox mb-3 text-success fw-bold">
            <small>Usuario Registrado Id: {currentUser.id}</small>
          </div>
        ) : null}
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Registrar
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
      </form>
    </main>
  );
};

export default Register;
