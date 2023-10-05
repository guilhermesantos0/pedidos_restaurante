import "../styles/components/Header.css";
import logo from '../logo.svg';
import home from '../home.svg';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div className="Header">
            <Link to="/"><img className="home" src={home} alt="Voltar" /></Link>
            <img src={logo} alt="Logo" />
            <h1>Nome do Restaurante</h1>
        </div>
    )
}

export default Header