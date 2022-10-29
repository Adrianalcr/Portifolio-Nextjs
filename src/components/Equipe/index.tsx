import Carousel from 'react-elastic-carousel';
import { Container, Item } from "./styles";
import TitulosSec from '../TitulosSec';

import Image from 'next/image';
import avatar from '../../assets/img/eu.png';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 3 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];

function Equipe() {
  return (
    <>
      <Container data-aos="fade-up">
        <TitulosSec titulo1="Colaboradores" descricao1="Equipe"/>

        <section>
            <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1500} itemPadding={[0, 10]}>
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