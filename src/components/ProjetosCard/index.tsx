import Carousel from 'react-elastic-carousel';
import TitulosSec from '../TitulosSec';
import ProjetosItens from './ProjetosItens';
import { Container } from './styles';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 3 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

function Projeto() {
    return (
        <>
            <Container data-aos="fade-up">
                <TitulosSec titulo1="Projetos" descricao1="Desenvolvidos" />
                <section>
                    <Carousel breakPoints={breakPoints} itemPadding={[0, 10]} >
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
export default Projeto;