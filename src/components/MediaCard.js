import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Representative Finder
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Simple React app using Google's Civic Information API to list U.S. representatives by address.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" disabled>
          React
        </Button>
        <Button size="small" color="primary" disabled>
          Firebase
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            This Website
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Just a front end React website using Material-UI library and Firebase hosting.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" disabled>
          React
        </Button>
        <Button size="small" color="primary" disabled>
          Material-UI
        </Button>
        <Button size="small" color="primary" disabled>
          Firebase
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Futurama Character Info
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Uses sampleapis.com to find Futurama character info.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" disabled>
          React
        </Button>
        <Button size="small" color="primary" disabled>
          Firebase
        </Button>
      </CardActions>
    </Card>
    </>
  )
}