import LaunchIcon from "@material-ui/icons/Launch"
import Button from '@material-ui/core/Button'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { lightGreen } from "@material-ui/core/colors"

export default function Resume() {

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(lightGreen['400']),
      backgroundColor: lightGreen['400'],
      '&:hover': {
        backgroundColor: lightGreen['700'],
      },
    },
  }))(Button)
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }))

  const classes = useStyles()
  
  return (
    <a
      href="https://danboudet-com.s3.us-east-2.amazonaws.com/dan-boudet-resume-web.pdf"
      target="_blank"
      rel="noreferrer"
    >
      <ColorButton variant="contained" color="primary" size="large" p="16px" className={classes.margin} endIcon={<LaunchIcon />}>
        RESUME
      </ColorButton>
    </a>
  )
}
