import Link from 'next/link';
import TitulosSec from '../TitulosSec';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
    return(
        <>
            <Container data-aos="fade-up">
                <TitulosSec titulo1=" 7 Anos"  descricao1="de experiencia"/>

                <section>
                    <ExperienciaItem year="2016" title="Developer Full Stack" description="Loren ipusem doller, loren ipusem dolleroren."/>
                    <ExperienciaItem year="2017" title="Developer Full Stack" description="Loren ipusem doller, loren ipusem dolleroren."/>
                    <ExperienciaItem year="2018" title="Developer Full Stack" description="Loren ipusem doller, loren ipusem dolleroren."/>
                    <ExperienciaItem year="2019" title="Developer Full Stack" description="Loren ipusem doller, loren ipusem dolleroren."/>
                </section>
            </Container>
        </>
        
    )
}
export default Experiencias;