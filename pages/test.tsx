import Link from 'next/link';

const Test = () => {
    return(
        <div> 
            <p>Hola, soy la página de Test</p>
            <Link href="/">
                <a>Inicio</a>
            </Link>

        </div>
    )
}

export default Test;