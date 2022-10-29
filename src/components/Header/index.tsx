import NavLink from "./NavLink";
import { Container, Content, Nav } from "./styles";


function Header() {
    return (
        <Container>
            <Content>
                <Nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>

                        <ul id="menu">
                            <NavLink title="HOME" path="/" />
                            <NavLink title="SOBRE" path="/sobre" />
                            <NavLink title="PROJETOS" path="/projetos" />
                            <NavLink title="SKILLS" path="/equipe" />
                            <NavLink title="CONTATO" path="/contato" />
                        </ul>
                    </div>
                </Nav>
            </Content>
        </Container>
    );
};

export default Header;