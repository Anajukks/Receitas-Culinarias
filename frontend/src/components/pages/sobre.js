import React from "react";
import Navbar from "../ui/Navbar";
import Rodape from "../ui/Rodape";
import SobreDescricao from "../ui/Sobre";
import Contatenos from "../ui/Contatenos";
import Meio from "../ui/Meio";

const Sobre = () => {
  return (
    <div>
      <Navbar />
      <SobreDescricao />
      <Meio />
      <Contatenos />
      <Rodape />
    </div>
  );
};

export default Sobre;
