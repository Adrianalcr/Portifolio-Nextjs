import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;

    > img{
        width: 40rem;
        flex: 1;
    }

    > div{
        flex: 4;
    }

    @media(max-width: 1450px){
        > img{
            width: 30rem;
        }
        > div {
            flex: 1;
        }
    }

    @media(max-width: 1000px){
        > img{
            width: 22rem;
        }
    }

    @media(max-width: 700px){
        flex-direction: column-reverse;
        > div{
            width: 100%;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 100%);
        mask-image: linear-gradient(to top, transparent 2%, black 50%);
    }
`;

export const TextContainer = styled.section`
    margin-bottom: 2rem;
    width: 100%;

    h1 {
        font-size: 8rem;
        color: ${({ theme }) => theme.primary};
    }

    h2 {
        font-size: 3rem;
        font-weight: 400;
        color: ${({ theme }) => theme.secondary};
    }

    @media(max-width: 1450px){
        h1{
            font-size: 5rem;
        }
        h2 {
            font-size: 2rem;
        }
    }

    @media(max-width: 1000px){
        h1{
            font-size: 3rem;
        }
        h2{
            font-size: 1.5rem;
        }

    }
`;

export const InfoContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const CodeItem = styled.pre`
    background: ${({ theme }) => theme.gradient};
    background: #7a7de38f;
    padding: 2rem;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 300;
    color: #fff;
    width: 24rem;
    align-self: flex-start;
    transition: 1s;
    
    border-radius: 0px;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;

    &:focus, &:active {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
        
    }

    &:hover{
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
        filter: brightness(1.2);
    }

    &:last-child{
        align-self: self-end;
    }

    @media (max-width: 1450px){
        width: 18rem;
        padding: 1.5rem;
        font-size: 0.8rem;
    }

    @media (max-width: 1000px){
        width: 100%;
    }

    @media (max-width: 600px){
        width: 100%;
    }

    > div {
        margin: 0.2rem 0;
        margin-left: 1rem;
    }

    span.purple{
        color: #c38cdd;
    }
    span.blue{
        color: #7ac7e3;
    }
    span.comment{
        color: ${({ theme }) => theme.text};
        margin-bottom: 1rem;
        display: block;
    }
        
    
`;