import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createReceita,
  getStorageUser,
  retrieveReceita,
  updateReceita,
} from "../../api/http";

import "../ui/CadReceitas.css";

import logo from "../../assets/logo_projeto.png";
import PaginaErro from "./PaginaErro";

const FormularioReceita = () => {
  // Navegação
  const navigate = useNavigate();

  const [creating, setCreating] = useState(true);
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tempo, setTempo] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [preparationSteps, setPreparationSteps] = useState(["Passo 1..."]);
  const [imagem, setImagem] = useState("");
  const [previewImagem, setPreviewImagem] = useState(null);
  const fileInputRef = useRef(null); // Ref para o input file

  const { id } = useParams();

  useEffect(() => {
    // Verificar se TEM id
    if (!id) {
      return;
    }

    const fetchResult = async () => {
      try {
        const fetchedResult = await retrieveReceita(id);

        if (!fetchedResult.found) {
          alert("Receita não encontrada");
          navigate("/");
          return;
        }

        const { user_id } = getStorageUser();

        // Verificar se o ID correspondente é o dono da receita
        if (fetchedResult.info.usuario_id != user_id) {
          alert("Esse usuário não tem permissão para alterar essa receita!");
          navigate(`/receita/${id}`);
          return;
        }

        setTitulo(fetchedResult.info.titulo);
        setCategoria(fetchedResult.info.categoria);
        setTempo(fetchedResult.info.tempo_de_preparo);
        setIngredientes(fetchedResult.info.ingredientes);
        setImagem(fetchedResult.img);
        const modo_de_preparo = fetchedResult.info.modo_de_preparo.split(", ");
        setPreparationSteps(modo_de_preparo);
      } catch (error) {
        return <PaginaErro erro={error} />;
      }
    };

    fetchResult();
    setCreating(false);
  }, [id, navigate]);

  const handleFormulario = async (e) => {
    e.preventDefault();

    // Recuperando o Usuário
    const { token, user_id } = getStorageUser();

    // Transformando preparação por junção
    const preparo = preparationSteps.join(", ");

    // Criando valores em formulário para enviar
    const formData = new FormData();
    formData.append("usuario_id", user_id);
    formData.append("titulo", titulo);
    formData.append("categoria", categoria);
    formData.append("tempo_de_preparo", tempo);
    formData.append("ingredientes", ingredientes);
    formData.append("modo_de_preparo", preparo);
    formData.append("imagem", imagem);

    let data = null;
    if (creating) {
      data = await createReceita(formData, token);
    } else {
      formData.append("_method", "PUT");
      data = await updateReceita(formData, id, token);
    }

    if (data.errors) {
      // Coletar os erros
      const errors = Object.values(data.errors);

      // Produzir uma mensagem de errors
      let errorMessage = `Aconteceu um erro: `;
      errors.map((error) => (errorMessage += error));

      // Mostrar a Mensagem
      alert(errorMessage);
    } else {
      alert("Receita atualizada com sucesso!");
      if (id) navigate(`/receita/${id}`);
      else navigate("/");
    }
  };

  const handlePreview = (e) => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];

    const file = e.target.files[0];
    if (file && validTypes.includes(file.type)) {
      setImagem(e.target.files[0]);
      // Gera a URL de pré-visualização usando FileReader
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImagem(reader.result); // Define a URL para pré-visualização
      };
      reader.readAsDataURL(file);
    } else {
      alert("Arquivo inválido.");

      // Limpa o campo input file
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleStepChange = (index, value) => {
    let steps = [...preparationSteps];
    steps[index] = value;
    setPreparationSteps(steps);
  };

  const addPreparationStep = () => {
    setPreparationSteps([...preparationSteps, ""]);
  };

  return (
    <div className="full-page">
      <form onSubmit={handleFormulario}>
        <div className="form-container ">
          <div className="form-logo">
            <img src={logo} alt="Logo Cozinha em Bytes" />
          </div>
          <h1 className="form-title">Cadastrar Receitas</h1>
          <div className="form-columns">
            <div className="left-column">
              <label>
                Título da receita
                <input
                  type="text"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  placeholder="Digite o título"
                  className="form-input"
                />
              </label>
              <label htmlFor="categoria">
                Categoria
                <select
                  id="categoria"
                  name="categoria"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  <option value="Almoço">Almoço</option>
                  <option value="Jantar">Jantar</option>
                  <option value="Doces">Doce</option>
                  <option value="Salgados">Salgado</option>
                  <option value="Lanches">Lanche</option>
                </select>
              </label>
              <label>
                Tempo de preparo
                <input
                  type="text"
                  value={tempo}
                  onChange={(e) => setTempo(e.target.value)}
                  placeholder="Em minutos"
                  className="form-input"
                />
              </label>
              <label>
                Ingredientes
                <input
                  type="text"
                  value={ingredientes}
                  onChange={(e) => setIngredientes(e.target.value)}
                  placeholder="Separe por vírgula (,)"
                  className="form-input"
                />
              </label>

              <label>
                Arquivo
                <input
                  type="file"
                  id="foto"
                  name="foto"
                  onChange={handlePreview}
                  ref={fileInputRef}
                  className="form-input"
                />
              </label>
              {previewImagem ? (
                <div style={{ marginTop: "20px" }}>
                  <h3>Pré-visualização:</h3>
                  <img
                    src={previewImagem}
                    alt="Pré-visualização"
                    style={{ width: "300px", borderRadius: "8px" }}
                  />
                </div>
              ) : (
                <span></span>
              )}
            </div>
            <div className="right-column">
              <h2 className="preparation-title">Modo de preparo</h2>
              <div className="preparation-steps">
                {preparationSteps.map((step, index) => (
                  <div key={index} className="preparation-step">
                    <span className="step-number">{index + 1}</span>
                    <input
                      type="text"
                      value={step}
                      onChange={(e) => handleStepChange(index, e.target.value)}
                      placeholder={`Passo ${index + 1}`}
                      className="step-input"
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="add-step-button"
                onClick={addPreparationStep}
              >
                +
              </button>
            </div>
          </div>
          <button type="submit" className="submit-button">
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioReceita;
