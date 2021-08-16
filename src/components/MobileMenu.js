import { useState } from "react"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { HashLink as Link } from "react-router-hash-link"
import MenuIcon from "@material-ui/icons/Menu"

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <div>
      <Button
        aria-controls="mobile-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link className="mobile-menu-item" to="#about">About</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className="mobile-menu-item" to="#portfolio">Portfolio</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className="mobile-menu-item" to="#links">Links</Link>
        </MenuItem>
      </Menu>
    </div>
  )
}
