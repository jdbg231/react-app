import "./style.css"

function NavBar({mensaje,variant}) {
    return <>
        <header>
            <nav>
                <a href="index.html">Inicio</a>
                <a href="portafolio.html">Portafolio</a>
                <a href="conoceme.html">Conóceme</a>
                <a href="contacto.html">Contacto</a>
            </nav>
        </header>
    </>;
}

export default NavBar;