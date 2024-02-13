import { BoxPage } from "../../../Components/BoxPage";
import{BoxContainer, Container, ContainerPage,} from "./style";
import usina1 from '../../../Components/Img/imgUsina1.jpg';
import comercial3icone from '../../../Components/Img/comercial3icone.png';
import comercial2icone from '../../../Components/Img/comercial2ricone.png';
import comercial1icone from '../../../Components/Img/comercial1icone.png';
import { CardOrcamento } from "../../../Components/CardOrcamento";

import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";
//import { Footer } from "../../../Components/Footer";



export const Usina: React.FC = () => {

  return(
  
      <Container>
            <BoxTitulo titulo="Usina" traco="_________"/>
        <BoxContainer>
      <ContainerPage>
    <BoxPage  imagem={usina1}
    texto="As usinas fotovoltaicas são uma fonte de energia limpa e renovável, contribuindo para reduzir a dependência de combustíveis fósseis e diminuir as 
    emissões de gases de efeito estufa, ajudando assim na luta contra as mudanças climáticas. "
   
    icone1={comercial1icone}
    icone2={comercial3icone}
    icone3={comercial2icone}
    icone4={comercial3icone}
    titulo="Instalação Enerjuz ©"
    />
      </ContainerPage>
      
    <CardOrcamento></CardOrcamento>
   </BoxContainer>
   <Footer></Footer>
   </Container>
    );
  }