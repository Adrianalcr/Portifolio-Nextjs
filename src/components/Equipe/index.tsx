import Carousel from 'react-elastic-carousel';
import { Container, Item } from "./styles";
import TitulosSec from '../TitulosSec';

import Image from 'next/image';
import avatar from '../../assets/img/eu.png';
import reactJS from '../../assets/img/reactJS.png';
import typeJS from '../../assets/img/typeJS.png';
import vercel from '../../assets/img/vercel.png';
import vueJS from'../../assets/img/vueJS.png';
import javaScript  from'../../assets/img/javaScript.png';

function Equipe() {
  return (
    <>
      <Container data-aos="fade-up">
        <TitulosSec titulo1="Colaboradores" descricao1="Equipe"/>

        <section>
            <Carousel itemsToScroll={4} itemsToShow={4} enableAutoPlay autoPlaySpeed={1500} itemPadding={[0, 10]}>
              <Item><Image src={avatar} alt="Eu" /></Item>
              <Item><Image src={avatar} alt="Eu" /></Item>
              <Item><Image src={avatar} alt="Eu" /></Item>
              <Item><Image src={avatar} alt="Eu" /></Item>
              <Item><Image src={avatar} alt="Eu" /></Item>
              <Item><Image src={avatar} alt="Eu" /></Item>
            </Carousel>                  
        </section> 
      </Container>
    </>
  )
}
export default Equipe;