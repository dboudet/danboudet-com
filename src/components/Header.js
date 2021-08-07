import { HashLink as Link } from 'react-router-hash-link'

export default function Header() {
    return (
    <header>
        <div id="header-flex-container">
            <h1>
                <Link className="navlink" to="/#top">Dan Boudet</Link>
            </h1>
            <nav>
                <ul>
                    <li><Link className="navlink" to="/#about">About</Link></li>
                    <li><Link className="navlink" to="/#portfolio">Portfolio</Link></li>
                    <li><Link className="navlink" to="/#contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}