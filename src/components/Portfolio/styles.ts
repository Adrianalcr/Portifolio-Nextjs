import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    > section{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 4rem;

        @media(max-width: 1000px){
            gap: 2rem;
        }
    }

    
`;

export const PortfolioItem = styled.div`
    width: 100%;
    display: flex;
    height: 25rem;
    align-items: flex-end;
    position: relative;

    > secction{
        width: 50rem;
        height: 100%;
    }
`;