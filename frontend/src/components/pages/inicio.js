import React, { useEffect, useState } from "react";
import { retrieveReceitaQuery } from "../../api/http";

import Navbar from "../ui/Navbar";
import Destaque from "../ui/Destaque";
import FCarousel from "../ui/Carousel";
import Rodape from "../ui/Rodape";
import PaginaErro from "./PaginaErro";

const Inicio = () => {
  // Categorias para carregar
  const categorias = ["Almoço", "Jantar", "Doces", "Lanches", "Salgados"];

  // States
  const [destaque, setDestaque] = useState("");
  const [categoriasInfo, setCategoriasInfo] = useState({});
  const [loading, setLoading] = useState(true);

  // Recuperando dados
  useEffect(() => {
    const fetchData = async () => {
      try {
        const info = await retrieveReceitaQuery(
          `destaque=true&categorias=${categorias.join(",")}`
        );

        setDestaque(info.destaque);
        setCategoriasInfo(info.categorias);
        setLoading(false);
      } catch (error) {
        return <PaginaErro erro={error} />;
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <Navbar />
      <Destaque info={destaque} />
      {categorias.map((categoria, index) => {
        if (categoriasInfo[categoria].length !== 0) {
          return (
            <FCarousel
              key={index}
              title={categoria}
              receitas={categoriasInfo[categoria]}
            />
          );
        }
      })}
      <Rodape />
    </div>
  );
};

export default Inicio;
