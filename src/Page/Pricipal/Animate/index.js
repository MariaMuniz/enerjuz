import React from "react";

import './animate.css';
import Carousel from 'react-bootstrap/Carousel';


function Animate() {
 

  return (


    <div style={{display: 'block', width:1350, height:640, padding:10}}>
     
    <Carousel>
      <Carousel.Item>
        <img
        className="d-block w-100"
          src="img001.png"
          alt="Imagem One"
        />
    <Carousel.Caption>
    <h1 style={{ fontFamily: 'Poppins',animation:'fadeIn 5s'}}>Somos a Enerjuz</h1>
    <p style={{color:"#ffffb2", fontSize:'20px', marginBottom:'10rem', fontFamily: 'Poppins',  animation:'fadeIn 5s' }}>Para levar mais economia ao seu dia a dia, oferecemos a solução pra você economizar, praticar a sustentabilidade e gerar energia limpa.
    </p>
    
    </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
        <img
        className="d-block w-100"
          src="img002.png"
          alt="Imagem Two"
        />
      <Carousel.Caption>
      <h1  style={{ fontFamily: 'Poppins',animation:'fadeIn 5s'}}>Somos a Enerjuz</h1>
    
      <p style={{color:"#ffffb2", fontSize:'20px', marginBottom:'10rem', fontFamily: 'Poppins', animation:'fadeIn 5s'}}>Economia sem complicação para Casa, Comércio e Agro 
      <br></br>
      </p>
      <br></br>
      </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
        <img
        className="d-block w-100"
          src="img004.png"
          alt="Imagem Tree"
        />
             <Carousel.Caption>
      <h1  style={{ fontFamily: 'Poppins',animation:'fadeIn 5s'}}>Economize na sua conta de energia</h1>
      <p style={{color:"#ffffb2", fontSize:'20px', marginBottom:'10rem', fontFamily: 'Poppins', animation:'fadeIn 5s'}}>Conheça as soluções em geração de energia fotovoltaica
        <br></br>
      </p>
      <br></br>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>

  

  );
}

export default Animate;