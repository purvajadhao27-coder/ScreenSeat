
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <header className="site-header">
            <nav className="navbar-container">

                <Link to="/" className="navbar-logo">
                    Pick<span>MyShow</span>
                </Link>

                <div className="navbar-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                    <NavLink to="/theatres">Theatres</NavLink>
                    <NavLink to="/offers">Offers</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>

                <div className="navbar-auth">
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup" className="signup-link">
                        Signup
                    </NavLink>
                </div>

            </nav>
        </header>
    );
}

export default NavBar;
