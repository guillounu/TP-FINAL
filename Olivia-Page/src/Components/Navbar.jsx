import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/" className="barra-nav"><i className="fa-brands fa-bluesky"></i>Olivia Rodrigo</Link>
        

        <ul className="nav-options">
          <li>
            <Link to="/giras">Giras</Link>
          </li>
          <li>
            <Link to="/filmografia">Filmografía</Link>
          </li>
          <li>
            <Link to="/quizz">QUIZZ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
