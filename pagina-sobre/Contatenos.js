import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Contatenos.css'
import endereço from "./endereço.png";
import insta from "./insta.png";
import telefone from "./telefone.jpg"

export default function Contatenos() {
    return (
        <div className="d-flex flex-column bd-highlight mb-3 justify-content-evenly">
            <div id="tres" className="d-flex justify-content-center">
                <div className="p-1">
                    <h1 className="fs-3">Formas de Contato</h1>
                </div>
            </div>

            <div className="d-flex justify-content-evenly p-3 m-3">
                <div id="quatro" className="d-flex flex-column align-items-center">
                    <div className="cinco">
                        <img className="imagem" src={endereço} alt="Localização" />
                    </div>
                    <div className="cinco">
                        <h6>Localização</h6>
                    </div>
                </div>

                <div id="quatro" className="d-flex flex-column align-items-center">
                    <div className="cinco">
                        <img className="imagem" src={telefone} alt="Telefone" />
                    </div>
                    <div className="cinco">
                        <h6>Telefone</h6>
                    </div>
                </div>

                <div id="quatro" className="d-flex flex-column align-items-center">
                    <div className="cinco">
                        <img className="imagem" src={insta} alt="Instagram" />
                    </div>
                    <div className="cinco">
                        <h6>Instagram</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
