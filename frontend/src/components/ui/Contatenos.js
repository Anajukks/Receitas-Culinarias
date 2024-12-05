import React from "react";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./Contatenos.css";

import endereço from "../../assets/endereço.png";
import insta from "../../assets/insta.png";
import telefone from "../../assets/telefone.jpg";

export default function Contatenos(){
  return(
      <div>
          <div className='title'>
              <h1>Contate-nos</h1>
          </div>

          <div class="d-flex flex-column bd-highlight mb-3 justify-content-evenly">

          <div class="d-flex justify-content-evenly p-3 m-3">
          <div id="quatro"class="d-flex flex-column  ">
                  <div class="cinco">
                      <img class="imagem"src={endereço}></img>
                  </div>
                  <div class="cinco">
                      <h6>Localização</h6>
                  </div>
              </div>

              <div id="quatro" class="d-flex flex-column ">
                  <div class="cinco">
                      <img class="imagem" src={telefone}></img>
                  </div>
                  <div class="cinco">
                      <h6>Telefone</h6>
                  </div>
              </div>

              <div id="quatro"class="d-flex flex-column ">
                  <div class="cinco">
                      <img class="imagem" src={insta}></img>
                  </div>
                  <div class="cinco">
                      <h6>Instagram</h6>
                  </div>
              </div>
          </div>
          </div>
          <br className='space'/>

      </div>
  );
}