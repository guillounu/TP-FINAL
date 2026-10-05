import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer>
      <ul className="footer-nav">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/quizz">QUIZZ</Link>
        </li>
        <li>
          <Link to="/giras">Giras</Link>
        </li>
        <li>
          <Link to="/filmografia">Filomografía</Link>
        </li>
      </ul>
      <div className="footer-social">
        <a
          href="https://www.instagram.com/oliviarodrigo/"
          target="_blank"
          aria-label="instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCy3zgWom-5AGypGX_FVTKpg"
          target="_blank"
          aria-label="YouTube"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>

        <a
          href="https://open.spotify.com/intl-es/artist/1McMsnEElThX1knmY4oliG"
          target="_blank"
          aria-label='Spotify'
        >
          <i className='fa-brands fa-spotify'></i>
        </a>
      </div>
    </footer>
  );
}
