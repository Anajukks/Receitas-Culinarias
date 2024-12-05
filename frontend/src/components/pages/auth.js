import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated, getStorageUser } from "../../api/http";

import PaginaErro from "./PaginaErro";

const AuthRedirect = ({ children, authRedirect, noAuthRedirect }) => {
  const [isAuth, setIsAuth] = useState(null);
  const { user_id, token } = getStorageUser();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const auth = await isAuthenticated(user_id, token);
        setIsAuth(auth);
      } catch (error) {
        return <PaginaErro erro={error} />;
      }
    };
    checkAuth();
  }, [user_id, token, noAuthRedirect]);

  // Enquanto verifica autenticação, exibe um placeholder
  if (isAuth === null) {
    return <div>Carregando...</div>;
  }

  // Se estiver autenticado, redirecione para...
  if (isAuth && authRedirect) {
    return <Navigate to={authRedirect} replace />;
  }

  // Se não estiver autenticado, redirecionar para...
  if (!isAuth && noAuthRedirect) {
    return <Navigate to={noAuthRedirect} replace />;
  }

  // Se não, direcione para...
  return children;
};

export default AuthRedirect;
