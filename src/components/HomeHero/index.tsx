import { 
    Container, 
    TextContainer, 
    InfoContainer, 
    CodeItem 
} from "./styles";

import Image from "next/image";
import avatar from '../../assets/img/eu.png';

function HomeHero() {
    return (
        <Container data-aos="fade-up">
            <Image src={avatar} alt="Avatar" />
            <div>
                <TextContainer>
                    <h1>Hi!</h1>
                    <h2>My name is Adriana Lima</h2>
                </TextContainer>
                <InfoContainer>
                    <CodeItem>
                        <span className="comment">//My Presentation: </span>
                        <span className="purple">Info</span> {'\u007B'}
                        <div>
                            Name: <span className="blue">Adriana</span>
                        </div>
                        <div>
                            Last Name: <span className="blue">Lima</span>
                        </div>
                        {'\u007D'}
                    </CodeItem>

                    <CodeItem>
                        <span className="purple">Experience:</span> {'\u007B'}
                        <div>
                            Occupation: <span className="blue">Dev Full Stack</span>
                        </div>
                        <div>
                            Company: <span className="blue">Freelancer</span>
                        </div>
                        <div>
                            Time: <span className="blue">+6 years</span>
                        </div>
                        {'\u007D'}
                    </CodeItem>

                </InfoContainer>
            </div>
        </Container>
    );
};

export default HomeHero;