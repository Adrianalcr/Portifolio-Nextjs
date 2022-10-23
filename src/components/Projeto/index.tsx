import Link from 'next/link';
import TitulosSec from '../TitulosSec';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projetos: IProjeto[];
}

function Projeto({ projeto }: ProjetoProps) {
  return (
    <Container>
      <TitulosSec title="Ultimos Projetos" />

      <section>
        {projeto.slice(0, 3).map(projeto => (
          <ProjetoItem
            key={projeto.slug}
            img={projeto.thumbnail}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
export default Projeto;