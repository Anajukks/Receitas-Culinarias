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
                      <a href="https://www.google.com/maps/uv?pb=!1s0x7afec3b2216fb6d%3A0xfd0a7ee7ca8257a9!3m1!7e115!4s%2Fmaps%2Fplace%2Flocaliza%25C3%25A7%25C3%25A3o%2Bifrn%2Bcampus%2Bcaic%25C3%25B3%2Brn%2F%40-6.4464178%2C-37.0690407%2C3a%2C75y%2C26.55h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sPhp1y5hb1XSBxN9y756hug*212e0*214m2*213m1*211s0x7afec3b2216fb6d%3A0xfd0a7ee7ca8257a9%3Fsa%3DX%26ved%3D2ahUKEwjtrrHav5GKAxVfErkGHZdfGG0Qpx96BAgXEAA!5slocaliza%C3%A7%C3%A3o%20ifrn%20campus%20caic%C3%B3%20rn%20-%20Pesquisa%20Google!15sCgIgAQ&imagekey=!1e2!2sPhp1y5hb1XSBxN9y756hug&cr=le_a7&hl=pt-BR&ved=1t%3A206134&ictx=111"><img class="imagem"src={endereço}></img></a>
                  </div>
                  <div class="cinco">
                      <h6>Localização</h6>
                  </div>
              </div>

              <div id="quatro" class="d-flex flex-column ">
                  <div class="cinco">
                  <a href="https://www.instagram.com/francilania.s/"><img class="imagem" src={telefone}></img></a>
                  </div>
                  <div class="cinco">
                      <h6>Telefone</h6>
                  </div>
              </div>

              <div id="quatro"class="d-flex flex-column ">
                  <div class="cinco">
                      <a href="https://www.instagram.com/francilania.s/"><img class="imagem" src={insta}></img></a>
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
