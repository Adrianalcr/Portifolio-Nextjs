import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  > section{
    width: 100%;
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;

    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};        
  }
  
  img{
    background-color: ${({ theme }) => theme.white};
    border-radius: 50%;
    border: 2px solid #fff;
    width: 25em;
    objet-fit: cover;
  }

  @media(max-width: 1000px){
    gap: 1rem;
  }

  @media(max-width: 700px){
    flex-direction: column;
    margin-top: 5rem;
    gap: 2rem;
  }

  > rec.rec-arrow {
    border-radius: 0;

    &:hover {
      border-radius: 50%;
    }
    
    &:disabled {
        visibility: hidden;
    }
  }
   
  > rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
  }
`;

export const Item = styled.div`
  > div{
    width: 100%;
    transition: 0.5s;
  }

  @media(max-width: 1000px){
    > Container{
      height: 15rem;
      padding-top: 1.5rem;

      img{
        width: 100%;
      }           
    }
  }

  @media(max-width: 700px){
    &:nth-child(even) > div{
      margin-top: 0;
    }

    &:hover > div {
      transform: translateY(0);
    }

    > Conteiner{
      height: auto;
      padding: 2rem;
    }

    img{
      width: 100%;
    }    
  }
`;