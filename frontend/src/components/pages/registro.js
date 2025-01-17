import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register, setStorageUser } from "../../api/http";
import "./Cadastro.css";
import logo from "../../assets/logo_projeto.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Registro = () => {
  // Valores que se alteram ao longo da página
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  // Navegador de páginas
  const navigate = useNavigate();

  // Função para lidar com a requisição
  const handleRegistro = async (e) => {
    e.preventDefault();

    try {
      // Recupera os valores da api
      if (senha != confirmacaoSenha) {
        throw new Error("As senhas não batem");
      }

      const data = await register(nome, email, senha);
      console.log(data);

      // Vericiando se há erros
      if (data.errors) {
        // Coletar os erros
        const errors = Object.values(data.errors);

        // Produzir uma mensagem de errors
        let errorMessage = `Aconteceu um erro: `;
        errors.map((error) => (errorMessage += error));

        // Mostrar a Mensagem
        alert(errorMessage);
      } else {
        // Adicionar os valores de id do usuário e access_token no local storage
        setStorageUser(data.user_id, data.access_token);

        // Retorna para a página inicial
        navigate("/");
      }
    } catch (error) {
      // Atualiza na página o erro que aconteceu
      alert(`Aconteceu um erro: ${error}`);
    }
  };

  return (

    <div className="cadastro-container">
      <div className="cadastro-form">
      <a href="/"><img src={logo}  alt="Logo Cozinha em Bytes" className="cadastro-logo" /></a>
        <h2 id="titulo-h2">Criar Conta</h2>
        <form onSubmit={handleRegistro}>
          <div className="form-group">
            <label htmlFor="nome">Nome*</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha*</label>
            <input
                type={mostrarSenha ? "text" : "password"} // Tipo alterna entre texto e senha
                id="senha"
                name="senha"
                placeholder="Crie uma senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)} // Alterna o estado de visibilidade
                className="toggle-password"
              >
                {mostrarSenha ? <FaEyeSlash /> : <FaEye />} {/* Ícone do olho */}
              </button>
            
          </div>
          <div className="form-group">
            <label htmlFor="confirmacaoSenha">Confirmação de Senha*</label>
            <input
              type="password"
              id="confirmacaoSenha"
              name="confirmacaoSenha"
              placeholder="Confirme a senha criada"
              value={confirmacaoSenha}
              onChange={(e) => setConfirmacaoSenha(e.target.value)}
              />
             
            
          </div>
          <button type="submit" className="btn-cadastrar">
            CADASTRAR
          </button>
        </form>
       
      </div>
    </div>
  );
};

export default Registro;
