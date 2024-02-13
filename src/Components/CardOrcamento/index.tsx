import { Container,Titulo, TituloContainer, Formulario, Label, Button, Input, ContainerBtn, Menssage} from "./style";



export const CardOrcamento: React.FC = () => {
  return (
    <Container>
      <Titulo>Solicitar Orçamento</Titulo>
        <TituloContainer>
        Solicite orçamento de forma simples e rápida. Preencha os formulário
      </TituloContainer>

      <Formulario>
       
      
              <Label>Nome</Label>
              <Input placeholder="Nome" />
           
              <Label>Email</Label>
              <Input placeholder="Email"/>
          
            <Label>Telefone</Label>
              <Input placeholder="Telefone"/>
         
              <Label>Mensagem</Label>
              <Menssage  placeholder="Descreva sua necessidade" />
     
          

              <Label>reCaptcha</Label>

          <ContainerBtn>

            <Button type="submit">ENVIAR</Button>
         
          </ContainerBtn>
   
      </Formulario>
    </Container>
  
  );
  }