import { Button, Hidden } from '@material-ui/core'
import { HashLink as Link } from 'react-router-hash-link'
import MobileMenu from './MobileMenu'

export default function Header() {
    return (
    <header>
        <div id="header-flex-container">
            <h1>
                <Link className="navlink" to="/#top">Dan Boudet</Link>
            </h1>
            <nav>
                <Hidden mdUp><MobileMenu /></Hidden>
                <Hidden smDown>
                <ul>
                    <li className="navlink"><Button variant="outlined" color="primary" href="#about">About</Button>
</li>
                    <li className="navlink"><Button variant="outlined" color="primary" href="#portfolio">Portfolio</Button></li>
                    <li className="navlink"><Button variant="outlined" color="primary" href="#links">Links</Button></li>
                </ul>
                </Hidden>
            </nav>
        </div>
    </header>
    )
}