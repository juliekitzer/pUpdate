import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png";
import '../stylesheets/headerStyle.css';
import '../stylesheets/style.css';
function Header({ isAuthenticated }) {
    return (
        <div>
        <nav className="navbar is-tan" role="navigation" aria-label="main navigation">
        <a href="http://localhost:3000/">
            <img src={Logo} width="210" height="58" alt="Pupdate logo"/>
            </a>
  <div className="navbar-brand">
    
     
  

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
      <Link to="/">Home</Link>
      </a>

      <a className="navbar-item">
      <Link to="/Dashboard">Dashboard</Link>
      </a>
      
    </div>


    {   isAuthenticated ? null :
                
               
            <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong><Link to="/Register">Register</Link></strong>
                </a>
                <a className="button is-light">
                <Link to="/Login">Login</Link>
                </a>
              </div>
            </div>
          </div>
          }
    
  </div>
</nav>
</div>

    )
}



export default Header;