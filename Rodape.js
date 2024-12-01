import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import './Rodape.css';
import logo from './logo_projeto.png'; 

export default function Rodape() {
    return (
        <div className='rodape'>
            <div className='rodape-container'>
                <div className='logo-section'>
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div className='contact-section'>
                    <h5>Contatos</h5>
                    <p>Email: cozinhaembytes@escolar.ifrn.edu.br</p>
                    <p>Telefone: (84) 99999-9999</p>
                </div>
                <div className='social-section'>
                    <h5>Fique por dentro!</h5>
                    <div className='social-icons'>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="icon" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="icon" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
