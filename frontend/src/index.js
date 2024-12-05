import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

// Páginas
import Inicio from "./components/pages/inicio";
import Login from "./components/pages/login";
import Registro from "./components/pages/registro";
import Sobre from "./components/pages/sobre";
import Contatenos from "./components/ui/Contatenos";
import Receita from "./components/pages/receita";
import AuthRedirect from "./components/pages/auth";
import FormularioReceita from "./components/pages/receira-form";
import Avaliar from "./components/pages/Avaliar";
import Logout from "./components/pages/logout";
import PaginaErro from "./components/pages/PaginaErro";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Normal ROutes */}
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contatenos" element={<Contatenos />} />
        <Route path="/receita/:id" element={<Receita mode="" />} />

        {/* Auth Routes */}
        <Route
          path="/login"
          element={
            <AuthRedirect authRedirect="/">
              <Login />
            </AuthRedirect>
          }
        />
        <Route
          path="/registro"
          element={
            <AuthRedirect authRedirect="/">
              <Registro />
            </AuthRedirect>
          }
        />
        <Route
          path="/logout"
          element={
            <AuthRedirect noAuthRedirect="/">
              <Logout />
            </AuthRedirect>
          }
        />
        <Route
          path="/receita/formulario"
          element={
            <AuthRedirect noAuthRedirect="/login">
              <FormularioReceita />
            </AuthRedirect>
          }
        />

        <Route
          path="/receita/:id/formulario"
          element={
            <AuthRedirect noAuthRedirect="/login">
              <FormularioReceita />
            </AuthRedirect>
          }
        />

        <Route
          path="/receita/:id/avaliacao"
          element={
            <AuthRedirect noAuthRedirect="/login">
              <Avaliar />
            </AuthRedirect>
          }
        />

        {/* Página de Erro */}
        <Route path="*" element={<PaginaErro />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
