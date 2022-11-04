import Carousel from 'react-elastic-carousel';
import { Container, Item } from "./styles";
import TitulosSec from '../TitulosSec';

import Image from 'next/image';
import avatar from '../../assets/img/eu.png';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false, isRTL: true },
  { width: 850, itemsToShow: 3, isRTL: true },
  { width: 1150, itemsToShow: 4, itemsToScroll: 3, isRTL: true },
  { width: 1450, itemsToShow: 5, isRTL: true },
  { width: 1750, itemsToShow: 6, isRTL: true },
];

function Equipe() {
  return (
    <>
      <Container data-aos="fade-up">
        <TitulosSec titulo1="Colaboradores" descricao1="Equipe"/>

        <section>
            <Carousel breakPoints={breakPoints}>
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