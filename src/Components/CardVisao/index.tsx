
import Card from 'react-bootstrap/Card';

import CallIcon from '@mui/icons-material/Call';

interface Props {
  imagem: string;
  titulo: string;
  descricao: string;

}

export const CardVisao: React.FC<Props> = (props) =>{

  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img style={{ width: '4rem',marginLeft:'6rem', marginTop:'1rem'}} variant="top" src={props.imagem} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text> {props.descricao}</Card.Text>
      </Card.Body>
    </Card>
  );
}

