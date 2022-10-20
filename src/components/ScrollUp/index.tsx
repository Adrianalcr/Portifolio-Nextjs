import { FiChevronUp } from 'react-icons/fi';
import { Container, Scrollup } from './styles';

const ScrollUp = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container>
      <Scrollup>
        <div className="ScroollUp" onClick={scrollToTop} role="scroll">
          <FiChevronUp color="white" />
        </div>
      </Scrollup>
    </Container>
  );
};

export default ScrollUp;