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
import ccpbcLogo from "../assets/ccpbc-logo-2.png"
import breweryLogos from "../assets/brewery-logos.png"
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
    flexWrap: "wrap",
    justifyContent: "space-around",
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
                Applicant Assistant Demo
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                I developed this Applicant Tracking System demo in two weeks: It's a full stack application using a MySQL database, express/Node API, and React front-end, deployed to AWS. Login available upon request.
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
              Portfolio Website
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This quick portfolio site was built on React with Material-UI components, and hosted on Firebase.
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
                Futurama Character Info Generator
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This was a simple little side project to display Futurama character info from SampleAPIs.com.
              </Typography>
            </CardContent>
          </a>
        </CardActionArea>
        <CardActions className={classes.chips}>
          <Chip label="React" variant="outlined" color="primary" />
          <Chip label="Firebase" variant="outlined" color="primary" />
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <a
            href="https://www.palmbeachculture.com/"
            target="_blank"
            rel="noreferrer"
          >
            <CardMedia
              className={classes.media}
              image={ccpbcLogo}
              title="Cultural Council for PBC website"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="textPrimary"
              >
                palmbeachculture.com
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                During my 8 years at the Cultural Council for Palm Beach County, I managed all aspects of palmbeachculture.com, migrating to a WordPress CMS hosted on AWS in 2014.
              </Typography>
            </CardContent>
          </a>
        </CardActionArea>
        <CardActions className={classes.chips}>
          <Chip label="WordPress" variant="outlined" color="primary" />
          <Chip label="AWS" variant="outlined" color="primary" />
          <Chip label="Cloudflare" variant="outlined" color="primary" />
          <Chip label="Nginx" variant="outlined" color="primary" />
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <a
            href="https://twistedtrunkbrewing.com/"
            target="_blank"
            rel="noreferrer"
          >
            <CardMedia
              className={classes.media}
              image={breweryLogos}
              title="Twisted Trunk, Steamhorse, and TBC brewery websites"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="textPrimary"
              >
                Local Brewery Websites
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                In 2018, I created a family of easy-to-use, low-maintenance WordPress websites for <a href="https://twistedtrunkbrewing.com/" target="_blank" rel="noreferrer">Twisted Trunk</a>, <a href="https://steamhorsebrewing.com/" target="_blank" rel="noreferrer">Steamhorse</a>, and <a href="https://tequestabrewing.com/" target="_blank" rel="noreferrer">TBC</a> breweries. The main priority was to make it easy to update their tap lists, using custom post types.
              </Typography>
            </CardContent>
          </a>
        </CardActionArea>
        <CardActions className={classes.chips}>
          <Chip label="WordPress" variant="outlined" color="primary" />
          <Chip label="GoDaddy" variant="outlined" color="primary" />
        </CardActions>
      </Card>
    </>
  )
}
