import "../styles/components/Header.css";
import logo from '../logo.svg';
import home from '../home.svg';
import cart from '../cart.svg';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div className="Header">
            <Link to="/cart"><img src={cart} alt="Carrinho" className="cart" /></Link>
            <Link to="/"><img src={home} alt="Voltar" className="home" /></Link>
            <img src={logo} alt="Logo" />
            <h1>Nome do Restaurante</h1>
        </div>
    )
}

export default Header