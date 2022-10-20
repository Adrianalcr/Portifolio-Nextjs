import Carousel from 'react-elastic-carousel';
import { Container, Item } from "./styles";
import TitulosSec from '../TitulosSec';

import Image from 'next/image';
import nextJS2 from '../../assets/img/nextJS2.png';
import reactJS from '../../assets/img/reactJS.png';
import typeJS from '../../assets/img/typeJS.png';
import vercel from '../../assets/img/vercel.png';
import vueJS from'../../assets/img/vueJS.png';
import javaScript  from'../../assets/img/javaScript.png';

function Skills() {
  return (
    <>
      <Container>
        <TitulosSec titulo1="Skills" descricao1="Habilidades"/>

        <section>
            <Carousel itemsToScroll={4} itemsToShow={4} enableAutoPlay autoPlaySpeed={1500} itemPadding={[0, 10]}>
              <Item><Image src={nextJS2} alt="nextJS2" /></Item>
              <Item><Image src={reactJS} alt="reactJS" /></Item>
              <Item><Image src={typeJS} alt="typeJS" /></Item>
              <Item><Image src={vercel} alt="vercel" /></Item>
              <Item><Image src={vueJS} alt="vueJS" /></Item>
              <Item><Image src={javaScript} alt="javaScript" /></Item>
            </Carousel>                  
        </section> 
      </Container>
    </>
  )
}
export default Skills;