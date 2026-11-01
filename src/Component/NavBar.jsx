
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [city, setCity] = useState("Mumbai");

    return (
        <header className="bms-header">
            <div className="bms-topbar">
                <Link to="/" className="bms-logo">
                    Screen<span>Seat</span>
                </Link>

                <div className="bms-search">
                    <span className="search-icon">⌕</span>
                    <input
                        type="text"
                        placeholder="Search for movies, events, plays..."
                    />
                </div>

                <div className="bms-actions">
                    <select
                        className="bms-city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    >
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bengaluru">Bengaluru</option>
                    </select>

                    <Link to="/signin" className="bms-signin">
                        Sign In
                    </Link>

                    <button
                        type="button"
                        className="bms-menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            <nav className={`bms-subnav ${menuOpen ? "show-menu" : ""}`}>
                <div className="bms-subnav-left">
                    <Link to="/Movies">Movies</Link>
                    <Link to="/Stream">Stream</Link>
                    <Link to="/Events">Events</Link>
                    <Link to="/Plays">Plays</Link>
                    <Link to="/Sports">Sports</Link>
                    <Link to="/Activities">Activities</Link>
                </div>

                <div className="bms-subnav-right">
                    <Link to="/Theatres">Theatres</Link>
                    <Link to="/Offers">Offers</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Signup">Sign Up</Link>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
