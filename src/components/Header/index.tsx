import NavLink from "./NavLink";
import { Container } from "./styles";


function Header(){
    return(
        <Container>
           <ul>
                <NavLink title="HOME" path="/"/>
                <NavLink title="SOBRE" path="/sobre"/>
                <NavLink title="PROJETOS" path="/projetos"/>
                <NavLink title="SKILLS" path="/skills" />
                <NavLink title="CONTATO" path="/contato"/>
           </ul>
        </Container>
    );
};

export default Header;