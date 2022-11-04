import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { getPrismicClient } from '../../services/prismic';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

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

export default function Projetos({ projetos }: ProjetoProps) {
  return (
    <ProjetosContainer>
      <Head>
        <title>Adriana Lima - Portfólio 2</title>
        <meta
          name="description"
          content="Exemplo de portfolio em React.js, Typescript e Next.js, integrado com vercel!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Exemplo de portfolio em React.js, Typescript e Next.js, integrado com vercel!"
        />
        
        <link rel="shortcut icon" href="../assets/img/favicon.ico" type="image/x-icon"/>
        <link rel="icon" href="../assets/img/favicon.ico" type="image/x-icon"/>

        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=portifolionextjs"></script>      
       
      </Head>

      <Header />
      <main className="container">
        {projetos.map(projeto => (
          <ProjetoItem
            key={projeto.slug}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
            imgUrl={projeto.thumbnail}
          />
        ))}
      </main>
    </ProjetosContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};