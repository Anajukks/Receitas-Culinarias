import React from 'react';
import './Destaque.css';
import logo from './bife-a-parmegiana.jpg';

export default function Destaque(){
    return(
        
        <div className='div-red'>
            <div className='texto-apres'>
            <p>Bem-vindo ao Cozinha em Bytes! 🍲✨</p>
            <p>Aqui, você encontra um espaço dedicado a compartilhar sabores, dicas e receitas que vão inspirar suas aventuras na cozinha!</p>
            
            </div>
            <div className='week-food'>
                <div className='picture-food'>
                    <img src={logo} id='img-destaque'/>
                </div>
                <div className='information-food'>
                    <h4 id='destaque-title'>FILÉ A PARMEGIANA</h4>
                    <p className='text-break destaque-descricao'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p className='avaliacao'>5 estrelas ⭐</p>
                </div>
            </div>
        </div>
    );
}
