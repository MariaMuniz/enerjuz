import { BoxPageUsina } from "../../../Components/BoxPageUsina";
import{BoxContainer, Container, ContainerPage,Texto, BoxTexto} from "./style";
import usina1 from '../../../Components/Img/imgusina1.png';

import { CardOrcamento } from "../../../Components/CardOrcamento";

import { BoxTitulo } from "../../../Components/BoxTitulo";
import { Footer } from "../../../Components/Footer";
//import { Footer } from "../../../Components/Footer";



export const Usina: React.FC = () => {

  return(
  
      <Container>
            <BoxTitulo titulo="COMO FUNCIONA O ALUGUEL DE USINA" traco="______________________________________"/>
<BoxTexto>
       <Texto>
       Uma usina solar fotovoltaica gera créditos de
      energia que podem ser transferidos para outros locais.Você passa a receber esses créditos
      de energia de acordo com o seu consumo
       </Texto></BoxTexto>
        <BoxContainer>
      <ContainerPage>
    <BoxPageUsina  imagem={usina1}
    texto="Economize todo mês sem investir absolutamente NADA!
    Alugue uma fração de uma usina solar fotovoltaica e tenha um desconto de 20% aproximadamente, na
    sua fatura de energia elétrica na CEMIG"
   
 
    />
      </ContainerPage>
      
    <CardOrcamento></CardOrcamento>
   </BoxContainer>
   <Footer></Footer>
   </Container>
    );
  }