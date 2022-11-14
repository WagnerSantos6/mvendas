import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
        <div className="vendasmeta-logo-container">
            <img src={logo} alt="Image"/>
            <h1>Meta de Vendas</h1>
            <p>Desenvolvido por
                <a href="https://github.com/WagnerSantos6">@Wagner Santos</a>
            </p>
        </div>

    </header>

    )
}

export default Header;
