import { AiFillHtml5 } from 'react-icons/ai';
import { FaAngular, FaCss3Alt, FaNode, FaPhp, FaReact, FaVuejs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiExpress, SiMysql, SiNextdotjs, SiVercel } from 'react-icons/si';
import TitulosSec from '../TitulosSec';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <TitulosSec titulo1="Habilidades" descricao1="Adquiridos"/>
      
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Vue" icon={<FaVuejs />} />
        <ConhecimentoItem title="Angular" icon={<FaAngular />} />
        <ConhecimentoItem title="Node" icon={<FaNode />} />        
        <ConhecimentoItem title="Express" icon={<SiExpress />} />
        <ConhecimentoItem title="Next" icon={<SiNextdotjs />} />
        <ConhecimentoItem title="Vercel" icon={<SiVercel />} />
        <ConhecimentoItem title="PHP" icon={<FaPhp />} />
        <ConhecimentoItem title="MySQL" icon={<SiMysql/>} />
      </section>
    </Container>
  );
}

export default Conhecimentos;