import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <header class="nav">
            <a>Peter Krysinski</a>
            <ul>
                <li><a href="/">About Me</a></li>
                <li><a href="portfolio">Portfolio</a></li>
                <li><a href="contact">Contact</a></li>
                <li><a href="resume">Resume</a></li>
            </ul>
        </header>
      );
};