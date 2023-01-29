import { Link } from 'react-router-dom';
function Header({ isAuthenticated }) {
    return (
        <nav>
            <ul>
            {   isAuthenticated ? null :
                <><li><Link to="/Register">Register</Link></li>
                <li><Link to="/Login">Login</Link></li></>
            }

                <li><Link to="/">Home</Link></li>
                <li><Link to="/Dashboard">Dashboard</Link></li>
            </ul>
        </nav>

    )
}



export default Header;