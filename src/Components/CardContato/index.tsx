
import Card from 'react-bootstrap/Card';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function CardContato() {
  return (
    <Card style={{ width: '14rem', height:'29rem'}}>
      <Card.Img variant="top" />
      <Card.Body>
      <Card.Title style={{marginBottom: '2rem', marginTop:'2rem'}}>Entre em contato </Card.Title>
      <Card.Title></Card.Title>
     < CallIcon color="primary"/>
        <Card.Title>Telefone</Card.Title>
        <Card.Text>(31)9999-8888 </Card.Text>
        <MailIcon color="primary"/>
        <Card.Title>Email</Card.Title>
        <Card.Text> enerjuz@yahoo.com </Card.Text>
        <WhatsAppIcon color="primary"/>
        <Card.Title>WhatsApp</Card.Title>
        <Card.Text><a target="_blank" rel="noreferrer" href="https://wa.me/553199766499">(31)9999-8888 </a></Card.Text>
    
      </Card.Body>
    </Card>
  );
}

export default CardContato;