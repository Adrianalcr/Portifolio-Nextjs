import TitulosSec from '../TitulosSec';
import Contact from './Contact';
import { Container } from './styles';

function FormContact() {
  return (
    <Container>
      <TitulosSec 
      titulo1="Precisa dos meus serviços?" 
      descricao1="Preencha o formulário abaixo que irei retornar em breve"      
      />     
      <Contact/>
    </Container>
  );
}

export default FormContact;