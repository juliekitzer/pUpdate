import React, {useState} from 'react';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png";
import '../stylesheets/headerStyle.css';
import '../stylesheets/style.css';
function Header({ isAuthenticated }) {
const [menuIsActive, setMenuIsActive] = useState(false)


function handleMenuChange () {
setMenuIsActive (!menuIsActive)
}

    return (
        <div>
        <nav className="navbar is-tan" role="navigation" aria-label="main navigation">
        <a href="http://localhost:3000/">
            <img src={Logo} width="210" height="58" alt="Pupdate logo"/>
            </a>
  <div className="navbar-brand">
    
     
  

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"  onClick={(e)=> handleMenuChange()}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample"  class={menuIsActive == true ? "navbar-menu is-active": "navbar-menu"}
 >
    <div className="navbar-start">
      <a className="navbar-item" onClick={(e)=>handleMenuChange()}>
      <Link to="/">Home</Link>
      </a>

      <a className="navbar-item"onClick={(e)=>handleMenuChange()}>
      <Link to="/Dashboard" >Dashboard</Link>
      </a>
      
    </div>


    {   isAuthenticated ? null :
                
               
            <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" onClick={(e)=>handleMenuChange()}>
                  <strong><Link to="/Register">Register</Link></strong>
                </a>
                <a className="button is-light" onClick={(e)=>handleMenuChange()}>
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