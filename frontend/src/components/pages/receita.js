import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  retrieveReceita,
  retrieveUser,
  retrieveMediaDeAvaliacao,
  retrieveComentariosDaReceita,
} from "../../api/http";

import Navbar from "../ui/Navbar";
import Rodape from "../ui/Rodape";
import TopicoReceita from "../ui/TopicoReceita";
import Comentario from "../ui/Comentarios";
import PaginaErro from "./PaginaErro";

const Receita = () => {
  const [receita, setReceita] = useState("");
  const [imagem, setImagem] = useState("");
  const [usuario, setUsuario] = useState("");
  const [avaliacoes, setAvaliacoes] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [loading, setLoading] = useState(true);

  // Identificando o ID da receita
  const { id } = useParams();

  // Recuperando Receita
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // Recuperar a receita
        const fetchedReceita = await retrieveReceita(id);
        if (fetchedReceita.found) {
          const { info, img } = fetchedReceita;
          setReceita(info);
          setImagem(img);

          // Fazer requisições dependentes da receita
          const [fetchedUsuario, fetchedMedia, fetchedComentarios] =
            await Promise.all([
              retrieveUser(info.usuario_id),
              retrieveMediaDeAvaliacao(info.id),
              retrieveComentariosDaReceita(info.id),
            ]);

          setUsuario(fetchedUsuario);
          setAvaliacoes(fetchedMedia);
          setComentarios(fetchedComentarios);
          setLoading(false);
        } else {
          setReceita(null);
          setLoading(false);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados da receita:", error);
        return <PaginaErro erro={error} />;
      }
    };

    fetchAllData();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      {receita ? (
        <div>
          <Navbar />
          <TopicoReceita
            id={receita.id}
            title={receita.titulo}
            categoria={receita.categoria}
            avaliacoes={avaliacoes}
            ingredientes={receita.ingredientes}
            modo_de_preparo={receita.modo_de_preparo}
            tempo={receita.tempo_de_preparo}
            nome={usuario.nome}
            data={receita.created_at}
            imagem={imagem}
          />
          <Comentario lista={comentarios} />
          <Rodape />{" "}
        </div>
      ) : (
        <PaginaErro />
      )}
    </div>
  );
};

export default Receita;
