import "../styles/components/Header.css";
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div className="Header">
            <div className="top_bar">
                <img src={logo} alt="Logo" />
                <h1>Nome do Restaurante</h1>
            </div>
            <div className="bottom_bar">
                <Link to="/cart">Carrinho</Link>
                <Link to="/">Menu Inicial</Link>
            </div>
        </div>
    )
}

export default Header