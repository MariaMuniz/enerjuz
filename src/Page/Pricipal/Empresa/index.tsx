
import React from 'react';


import { Paragrafo, Container, ContainerPage,Card,CardContact} from './style';
import CardContato from '../../../Components/CardContato';
import visao from '../../../Components/Img/visao.png'
import missao from '../../../Components/Img/meta.png'
import equipe from '../../../Components/Img/imgequipe.png';
import painelSolar from '../../../Components/Img/painelSolar.png';

import { BoxTitulo } from '../../../Components/BoxTitulo';
import { CardImgG } from '../../../Components/CardImgG';
import { Footer } from '../../../Components/Footer';
import { ButtonCustomer } from '../../../Components/ButtonCustomer';
import { CardVisao } from '../../../Components/CardVisao';




export const Empresa: React.FC = () => {
  return (
    <Container>
           <BoxTitulo titulo="Somos a ENERJUZ" traco='________'/>
           <ContainerPage>
           <CardContact>
           <CardImgG  imagem={equipe} />

  
   
          
           <CardContato/>
    </CardContact>
     <Paragrafo>Estamos atuando há varios anos no mercado de energia solar. Oferecendo aos nossos cliente a 
      solução pra economizar, praticar a sustentabilidade e gerar energia limpa.
      Estamos atuando há varios anos no mercado de energia solar. Oferecendo aos nossos cliente a 
      solução pra economizar, praticar a sustentabilidade e gerar energia limpa
      Estamos atuando há varios anos no mercado de energia solar. Oferecendo aos nossos cliente a 
      solução pra economizar, praticar a sustentabilidade e gerar energia limpa</Paragrafo>
   
   
   

    </ContainerPage>
   
    <Card>
    <CardVisao titulo='Visao' descricao='Levar economia ao dia a dia, oferecendo soluções em geração de energia fotovoltaica praticando a sustentabilidade e  gerarando energia limpa.'imagem={visao} />
   
    <CardVisao titulo='Missão' descricao='Ser referência no setor de energia solar com garantia energética, com qualidade, confiabilidade, respeito, praticidade e sustentabilidade.'imagem={missao} />
    <CardVisao titulo='Valores' descricao='Satisfação e economia para o consumidor; Ética, respeito e valorização dos nossos colaboradores; Responsabilidade social; Sustentabilidade.'imagem={painelSolar} />
    
    </Card>
    <ButtonCustomer/>
    <Footer></Footer>
    </Container>
  );
}