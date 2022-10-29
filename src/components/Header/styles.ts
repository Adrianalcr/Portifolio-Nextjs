import { lighten } from 'polished';
import styled from 'styled-components';


interface NavLinkProps {
    isActive: boolean;
}

export const Container = styled.header`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};
    list-style-type: none;

    ul {
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    @media(max-width: 700px){
        border-bottom: none;
        height: 100%;
        trasition: 200ms;
        
        ul{
            flex-direction: column;
            padding: 0;
            list-style-type: none;
        }
        
    }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
    
    a {
        text-transform: uppercase;
        color: ${(props) => props.isActive ? props.theme.primary : props.theme.textHighLight};
        transition: 0.5s;

        &:hover{
            color: ${props => props.isActive
            ? lighten(0.2, props.theme.primary)
            : lighten(0.2, props.theme.textHighlight)};
        }
    }

`;

export const Content = styled.div`
    @media(max-width: 700px){
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
`;

export const Nav = styled.nav`
   
    #menuToggle input{
        display: none;
    }

    @media(max-width: 700px){
        width: 100%;
        height: 605px;
        max-height: 100vh;
        position: absolute;
        
            
        #menuToggle {
        position: relative;
        display: flex;
        flex-direction: column;
        top: 1px;
        padding: 25px;
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
      }
      
      #menuToggle input{
        display: flex;
        width: 40px;
        height: 32px;
        position: absolute;
        cursor: pointer;
        opacity: 0;
        z-index: 3;
      }
      
      #menuToggle span{
        display: flex;
        width: 29px;
        height: 2px;
        margin-bottom: 5px;
        position: relative;
        background: #ffffff;
        border-radius: 3px;
        z-index: 1;
        transform-origin: 5px 0px;
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
        background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
        opacity 0.55s ease;
      }
      
      #menuToggle  span:first-child{
        transform-origin: 0% 0%;
      }
      
      #menuToggle  span:nth-last-child(2){
        transform-origin: 0% 100%;
      }
      
      #menuToggle input:checked ~ span{
        opacity: 1;
        transform: rotate(45deg) translate(-3px, -1px);
        background: #fff;
      }
      #menuToggle input:checked ~ span:nth-last-child(3){
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }
      
      #menuToggle input:checked ~ span:nth-last-child(2){
        transform: rotate(-45deg) translate(0, -1px);
      }

      #menuToggle input:checked ~ ul{
        transform: none;
      }

      #menu{
        position: absolute;
        width: 100%;
        height: 100vh;
        /*box-shadow: 0 0 10px #85888C;*/
        margin: -50px 0 0 -25px;
        padding: 500px 0px;
        padding-top: 125px;
        background-color: rgba(133,24,63,1);
        -webkit-font-smoothing: antialiased;
        transform-origin: 0% 0%;
        transform: translate(-100%, 0);
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
       }
      
      #menu li{
        padding: 10px 0;
        transition-delay: 2s;
      }
      
    }   

`;