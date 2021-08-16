import React, { useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

export default function AlertDialog() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => setTimeout(handleClickOpen, 3000), [])

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Thanks for visiting!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Thanks for visiting my portfolio! Please feel free to look around, and if you have any questions, please send me a message on <a href="https://www.linkedin.com/in/danboudet/" target="_blank" rel="noreferrer">LinkedIn</a>! You'll find a link at the bottom of the page.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" disableFocusRipple="true" autoFocus>
            <strong>Continue</strong>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
