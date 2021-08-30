import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import capitolBuilding from "../assets/capitol_building_washington_dc.jpg"
import headshotWide from "../assets/headshot-2021-wide.png"
import futuramaImage from "../assets/futurama-title.jpeg"
import atsCardImage from "../assets/ats-demo-update-red.gif"
import { Chip } from "@material-ui/core"
import { palette } from "@material-ui/system"
import { lightGreen } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: "20px 10px",
  },
  media: {
    height: 160,
    backgroundSize: "cover",
  },
  chips: {
    fontWeight: "bold",
  },
}))

export default function MediaCard() {
  const classes = useStyles()

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <a
            href="http://dboudet-ats.s3-website-us-east-1.amazonaws.com/"
            target="_blank"
            rel="noreferrer"
          >
            <CardMedia
              className={classes.media}
              image={atsCardImage}
              title="Applicant Assistant"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="textPrimary"
              >
                Applicant Assistant <span style={{color:"#DD0000"}}>(DEMO)</span>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Applicant Tracking System &ndash; SERN (SQERN?) stack deployed to AWS
              </Typography>
            </CardContent>
          </a>
        </CardActionArea>
        <CardActions className={classes.chips}>
          <Chip label="AWS" variant="outlined" color="primary" />
          <Chip label="MySQL" variant="outlined" color="primary" />
          <Chip label="React" variant="outlined" color="primary" />
          <Chip label="Express" variant="outlined" color="primary" />
          <Chip label="Node" variant="outlined" color="primary" />
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={headshotWide}
            title="DanBoudet.com"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="textPrimary"
            >
              This Website
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              React portfolio website using Material-UI library, deployed to
              Firebase.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.chips}>
          <Chip label="React" variant="outlined" color="primary" />
          <Chip label="Firebase" variant="outlined" color="primary" />
          <Chip label="Material-UI" variant="outlined" color="primary" />
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <a
            href="https://db-futurama-react.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <CardMedia
              className={classes.media}
              image={futuramaImage}
              title="SampleAPIs.com Futurama Character Info"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="textPrimary"
              >
                Futurama Character Info
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Find Futurama character info, utilizing SampleAPIs.com API.
              </Typography>
            </CardContent>
          </a>
        </CardActionArea>
        <CardActions className={classes.chips}>
          <Chip label="React" variant="outlined" color="primary" />
          <Chip label="Firebase" variant="outlined" color="primary" />
        </CardActions>
      </Card>
    </>
  )
}
