import "./style.css"
import { FaCartArrowDown } from 'react-icons/fa';
import  { FaUserAlt } from 'react-icons/fa'

function CartWidget() {
    return <>
        <FaCartArrowDown className="iconos"/>
        <FaUserAlt className="iconos"/>
    </>;
}

export default CartWidget;