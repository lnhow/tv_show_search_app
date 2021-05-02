import { Link } from 'react-router-dom';
import './index.css';

function Header() {
  return (
    <header className="App-header">
      <Link to="/">
        <p className="App-title">TV series App</p>
      </Link>
    </header>
  );
}

export default Header;