import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getStorageUser, logout, clearStorageUser } from "../../api/http";

import PaginaErro from "./PaginaErro";

const Logout = () => {
  const navigate = useNavigate();
  const { token } = getStorageUser();
  const hasFetched = useRef(false);

  useEffect(() => {
    // Se já foi executado, não faz nada
    if (hasFetched.current) return;

    // Executando a primeira vez
    hasFetched.current = true;

    const fetchLogout = async () => {
      try {
        const fetchedLogout = await logout(token);

        if (fetchedLogout.message) {
          alert(fetchedLogout.message);
          return;
        }

        alert("Logout realizado com sucesso!");

        clearStorageUser();

        navigate("/login");
      } catch (error) {
        return <PaginaErro erro={error} />;
      }
    };

    fetchLogout();
  }, [token, navigate]);

  return <div>Realizando o logout...</div>;
};

export default Logout;
