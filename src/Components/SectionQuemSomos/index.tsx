

import { TextTituloSectionSobre} from "../TextTituloSectionSobre"

import { Container, TextoSomos, Imagem, ColumTexto, ColumnPage,Texto} from './style';
import equipeAzul from"../../Components/Img/equipeAzul.png";
import { CardImgSomos } from '../CardImgSomos';




export const SectionQuemSomos: React.FC = () => {
  return (
  <Container>
    <ColumnPage>
<ColumTexto>
    <TextoSomos>
    <TextTituloSectionSobre textoI='SOBRE' textoF='NÓS' traco='____'></TextTituloSectionSobre>
      
      <Texto>A energia solar oferece diversas vantagens, tornando-a uma opção atraente para muitos consumidores e empresas. Algumas das principais vantagens da energia solar incluem:
Sustentabilidade ambiental: A energia solar é uma fonte de energia renovável e limpa, que não emite poluentes atmosféricos ou gases de efeito estufa durante a geração de eletricidade.
 Isso ajuda a reduzir o impacto ambiental e combater as mudanças climáticas.
Economia de energia: Ao instalar sistemas de energia solar, os proprietários podem reduzir significativamente
 suas contas de energia, uma vez que geram eletricidade gratuita a partir da luz do sol. Em muitos casos, é possível economizar uma quantia considerável a longo prazo.
Redução das contas de eletricidade: A energia solar permite que os proprietários produzam sua própria eletricidade, reduzindo a dependência de fornecedores de eletricidade e protegendo contra aumentos nos preços da eletricidade.
</Texto>
      <Texto>
      Incentivos fiscais e financeiros: Muitos governos e agências oferecem incentivos financeiros, como créditos fiscais, subsídios e tarifas de alimentação, para estimular a instalação de sistemas de energia solar. 
      Isso torna a energia solar mais acessível e atraente do ponto de vista financeiro.
      </Texto>
       </TextoSomos>
       </ColumTexto>
       
  <Imagem>
<CardImgSomos imagem={equipeAzul}/>

</Imagem>

</ColumnPage>
 
</Container>


  );
}