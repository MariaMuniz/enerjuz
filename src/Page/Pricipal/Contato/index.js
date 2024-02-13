


import React from 'react';
import { BoxTitulo } from '../../../Components/BoxTitulo';
import CardEndereco from '../../../Components/CardEndereco';
import './formulario.css';

import { Footer } from '../../../Components/Footer';

export function Contato() {
  return (
  <div className='page'>
  <BoxTitulo titulo="CONTATO" traco='_____'/>

  <div className='card'>
       <CardEndereco/>
       </div>
  <div className='texto'>Preencha o formulário abaixo e clique em enviar. Responderemos sua mensagem o mais rápido possível!</div>
  



    <div className="containerDiv">
  

    <form className="form" action="https://formsubmit.co/cidamunizz2015@gmail.com"  method="POST">
      
    <input type="hidden" name="_captcha" value="false"/>
    <input type="hidden" name="_autoresponse"
       value="Recebemos sua mensagem! Obrigada pelo contato! Respoderemos em breve."/>
    

  <label>Nome:</label>
      <input 
        className="input"
        type="text"
        name="name"
        placeholder="Digite seu nome"
 
      />
        <label>Email:</label>
      <input 
        className="input"
        type="email"
        name="email"
        placeholder="Digite seu email"
      />
  <label>Menssagem:</label>
      <textarea 
        className="textarea"
        placeholder="Digite sua mensagem..."
        name="message"
      />
         <input type="hidden" name="_next" value="http://localhost:3000/obrigada"/>
      <input className="button" type="submit" value="Enviar" />
    </form>

  </div>
  <Footer></Footer>
  </div>

);
}
