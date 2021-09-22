import LaunchIcon from "@material-ui/icons/Launch"
import Button from "@material-ui/core/Button"
// import { withStyles, makeStyles, ThemeProvider } from "@material-ui/core/styles"
// import { lightGreen } from "@material-ui/core/colors"

export default function Resume() {
  // const ColorButton = withStyles((theme) => ({
  //   root: {
  //     color: theme.palette.getContrastText(palette.primary),
  //     backgroundColor: { primary },
  //     "&:hover": {
  //       backgroundColor: lightGreen["700"],
  //     },
  //   },
  // }))(Button)

  // const useStyles = makeStyles((theme) => ({
  //   margin: {
  //     margin: theme.spacing(1),
  //   },
  // }))

  // const classes = useStyles()

  return (
    <a
      href={"/assets/dan-boudet-resume-web-092221.pdf"}
      target="_blank"
      rel="noreferrer"
      style={{textDecoration:"none"}}
    >
      {/* <ThemeProvider theme={theme}> */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          p="16px"
          endIcon={<LaunchIcon />}
        >
          RESUME
        </Button>
      {/* </ThemeProvider> */}
    </a>
  )
}
