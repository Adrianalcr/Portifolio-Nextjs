import Link from 'next/link';
import { AiOutLineRightCircle } from 'react-icons/ai';
import { PortfolioItem } from './styles';

function Item() {
    return (
        <>
            <PortfolioItem>
                <section>
                    <div className="overlay" />
                    <div className="text">
                        <h1>Projeto 1</h1>
                        <h2>- Website</h2>
                    </div>
                </section>
                <button type="button">
                    <Link href="/projetos">
                        <a> Learn more <AiOutLineRightCircle /> </a>
                    </Link>
                </button>
            </PortfolioItem >
        </>
    )
}
export default Item;