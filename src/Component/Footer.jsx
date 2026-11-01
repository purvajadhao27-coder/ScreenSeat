
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <Link to="/" className="footer-logo">
                        Screen<span>Seat</span>
                    </Link>

                    <p className="footer-text">
                        Your seat, your show, your experience.
                    </p>

                    <div className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/Movies">Movies</Link>
                        <Link to="/Events">Events</Link>
                        <Link to="/Contact">Contact</Link>
                    </div>

                    <div className="footer-bottom">
                        <p>
                            © {new Date().getFullYear()} ScreenSeat.
                            Made for movie lovers.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
