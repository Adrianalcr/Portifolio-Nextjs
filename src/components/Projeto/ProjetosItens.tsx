import { ItemContainer } from './styles';
import Image from "next/image";
import avatar from '../../assets/img/eu.png';

interface ProjetosProps {
    skills: string;
    titulo2: string;
}

function ProjetosItens({ skills, titulo2 }: ProjetosProps) {
    return (
        <>
            <ItemContainer>
                <div>
                    <Image src={avatar} alt="Avatar"/>
                    <h1>{skills}</h1>
                    <p><a href={titulo2} target="_blank">{titulo2}</a></p>
                </div>
            </ItemContainer>
        </>
    )
}
export default ProjetosItens;