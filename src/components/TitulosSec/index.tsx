import { ReactNode } from 'react';
import { Container } from './styles';

interface TitulosSecProps{
    titulo1: string | ReactNode;
    descricao1?: string | ReactNode;
}

function TitulosSec({titulo1, descricao1}: TitulosSecProps) {
    return (
        <Container>
            <div>
                <h1>#{titulo1}</h1>
                {descricao1 && <h2>{descricao1}</h2>}
            </div>
        </Container>
    )
}
export default TitulosSec;
