import TitulosSec from '../TitulosSec';
import Item from './Item';
import { Container } from './styles';


function Portfolio() {
    return (
        <>
            <Container>
                <TitulosSec titulo1="Ultimos Projetos" />

                <section>
                    <Item />
                </section>
            </Container>
        </>
    )
}
export default Portfolio;