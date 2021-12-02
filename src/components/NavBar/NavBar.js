import "./style.css"
import CartWidget from "../CartWidget/CartWidget";

function NavBar({mensaje,variant}) {
    return <>
        <header>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Tienda</a>
                <a href="#">Quienes somos</a>
                <a href="#">Contacto</a>
            </nav>
            <div className="barra">
                <div>
                  <CartWidget/>
                </div>
            </div>
        </header>
    </>;
}

export default NavBar;