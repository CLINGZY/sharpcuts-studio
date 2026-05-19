import "./Navbar.css"


export default function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">SharpCuts Studio</h2>

            <ul className="nav-links">
                <li><a className="nav-link" href="/">Home</a></li>
                <li><a className="nav-link" href="/services">Services</a></li>
                <li><a className="nav-link" href="/gallery">Gallery</a></li>
                <li><a className="nav-link" href="/contact">Contact</a></li>
            </ul>

            <button className="nav-button">Book Appointment</button>
        </nav>
    )
}