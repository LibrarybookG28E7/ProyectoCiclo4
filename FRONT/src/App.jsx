import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import NavBar from "./components/NavBar";
import InicioProtegido from "./pages/InicioProtegido";
import { useSelector } from "react-redux";
import React from "react";
import Inicio from "./pages/Inicio";
import Footer from "./components/Footer";


function App() {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route
            path="/registro"
            element={currentUser ? <Navigate to="/" /> : <Register />}
          />

          <Route
            path="/"
            element ={<Inicio />}
          />

          <Route
            path="/inicio-sesion"
            element={currentUser ? <Navigate to="/" /> : <Signin />}
          />

          <Route path="/cuenta" element={<InicioProtegido />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
