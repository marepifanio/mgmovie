import {ReactComponent as GithubIcon} from 'assets/img/Github.svg';
import './styles.css';

function Navbar() {
    
  return(
    <header>
      <nav className="container">
        <div className="mgmovie-nav-content">
          <h1>MGMovie</h1>
          <a href="https://github.com/marepifanio">
            <div className='mgmovie-contact-container'>
              <GithubIcon />
              <p className='mgmovie-contact-link'>/marepifanio</p>  
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}


export default Navbar;