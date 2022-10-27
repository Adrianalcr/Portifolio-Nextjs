import Carousel from 'react-elastic-carousel';
import TitulosSec from '../TitulosSec';
import ProjetosItens from './ProjetosItens';
import { Container } from './styles';


function Projetos() {
    return (
        <>
            <Container data-aos="fade-up">
                <TitulosSec titulo1="Portifólio" descricao1="Projetos" />
                <section>
                    <Carousel  itemsToShow={4} autoPlaySpeed={1500} itemPadding={[0, 10]} >
                        <ProjetosItens skills="Cliente1" titulo2="www.seucliente.com.br" />
                        <ProjetosItens skills="Cliente2" titulo2="www.seucliente.com.br" />
                        <ProjetosItens skills="Cliente3" titulo2="www.seucliente.com.br" />
                        <ProjetosItens skills="Cliente4" titulo2="www.seucliente.com.br" />
                        <ProjetosItens skills="Cliente5" titulo2="www.seucliente.com.br" />
                        <ProjetosItens skills="Cliente6" titulo2="www.seucliente.com.br" />
                    </Carousel>
                </section>                
            </Container>
        </>
    )
}
export default Projetos;