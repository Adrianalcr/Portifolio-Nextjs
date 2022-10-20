import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Container } from './styles';


function Footer() {
    function handleRedirect(url: string) {
        window.open(url);
    }

    return (
        <>
            <Container>
                <div className="container">
                    <h1> By Adriana Lima </h1>

                    <section>
                        <FiGithub onClick={() => handleRedirect('https://github.com/Adrianalcr')} />
                        <FiLinkedin onClick={() => handleRedirect('https://linkedin.com/in/adriana-lima-cr')} />
                        <FiMail onClick={() => handleRedirect('mailto:adrianalima-dev@outlook.com')} />
                    </section>
                </div>
            </Container>
        </>
    )
}
export default Footer;