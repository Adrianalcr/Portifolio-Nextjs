import TitulosSec from '../TitulosSec';
import Contact from './Contact';
import { Container } from './styles';

function FormContact() {
  return (
    <Container>
      <TitulosSec/>
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar em breve
          </>
        }
      />
      <TitulosSec/>
      <Contact/>
    </Container>
  );
}

export default FormContact;