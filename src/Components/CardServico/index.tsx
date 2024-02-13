//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';  

interface Props {
  imagem: string;
  titulo: string;
  descricao: string;
  link: string;
}



export const CardServico: React.FC<Props> = (props) =>{

  return (
    
      <Card style={{ width:'18rem'}}>
        <Card.Img  variant="top" src={props.imagem} />
        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>
           {props.descricao}
          </Card.Text>
         
          <Link to={props.link}> 
       
          <Button variant="primary">VER MAIS</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }




