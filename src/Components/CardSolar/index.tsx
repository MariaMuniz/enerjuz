

import{Container,Desc, Titulo, Imagem, Numero, BoxNumero} from "./style";
interface Props {
  imagem: string;
  titulo: string;
 numero:string;
 descricao:string;

}



export const CardSolar:React.FC<Props> = (props) => {

  return (
  <Container> 
    <BoxNumero>
      <Numero>{props.numero}</Numero>
      </BoxNumero>
     <Imagem src={props.imagem} />
    <Titulo>{props.titulo}</Titulo>
    <Desc>{props.descricao}</Desc>
  

  </Container>
  );
}