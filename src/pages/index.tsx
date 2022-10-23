//@refresh reset
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';

import { HomeContainer } from '../styles/HomeStyles';

import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Projetos from '../components/Projetos';
import Skills from '../components/Skills';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';
import ScrollUp from '../components/ScrollUp';
import Projeto from './projetos/[slug]';
import Conhecimentos from '../components/Conhecimentos';

interface IProjeto{
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps{
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  return (
    <HomeContainer>
      <Header/>

      <main className="container">
        <HomeHero/>
        <Experiencias/>
        <Projetos/>
        <Projeto projetos={projetos}/>
        <Skills/>
        <Conhecimentos/>
        <FormContact/>
      </main>
     
      <Footer/>
      <ScrollUp/>
    </HomeContainer>
  );
}

//Usando Prismic CMS
export const getStaticProps:GetStaticProps = async () =>{
  const prismic = getPrismicClient();
  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'pro')],
    { orderings: '[document.first_publication_date desc]'}
  );
  const projetos = projectResponse.reults.map(projeto => ({ 
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  })); 

  return{
    props: {projetos},
    revalidate: 86400
  };
};