import styled from 'styled-components';

export const Container = styled.section`
    position: fixed;
    z-index: 999;
    bottom: 30px;
    right: 15px;
`;

export const Scrollup = styled.div`
    > div{
        background-color: ${({ theme }) => theme.primary};
        display: block;
        height: 50px;
        width: 50px;
        margin: 10px;
        text-align: center;
        line-height: 55px;
        -webkit-border-radius: 0;
        border-radius: 50%;
        position: relative;
        font-size: 25px;
        color: #FFF;
        opacity: 1;
        cursor: pointer;
        -webkit-transition: all 0.3s cubic-bezier(0.5,.8,.9,0.8);
        -moz-transition: all 0.3s cubic-bezier(0.5,.8,.9,0.8);
        -ms-transition: all 0.3s cubic-bezier(0.5,.8,.9,0.8);
        -o-transition: all 0.3s cubic-bezier(0.5,.8,.9,0.8);
        transition: all 0.3s cubic-bezier(0.5,.8,.9,0.8);
        -webkit-transform-origin: center;
        -moz-transform-origin: center;
        -ms-transform-origin: center;
        -o-transform-origin: center;
        transform-origin: center;  
    }

    &:hover > div{
        background-color: ${({ theme }) => theme.secondary};
    }
`;