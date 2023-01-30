import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';


function Header({ isAuthenticated }) {
    return (
        <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
        <a href="https://bulma.io"><img src="https://cdn.dribbble.com/users/3390157/screenshots/6315498/1_4x.png" width="110" height="58"/></a>
  <div class="navbar-brand">
    
     
    

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
      <Link to="/">Home</Link>
      </a>

      <a class="navbar-item">
      <Link to="/Dashboard">Dashboard</Link>
      </a>
      
    </div>


    {   isAuthenticated ? null :
                
               
            <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong><Link to="/Register">Register</Link></strong>
                </a>
                <a class="button is-light">
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