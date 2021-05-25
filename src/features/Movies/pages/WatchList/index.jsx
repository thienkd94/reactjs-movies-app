import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  bgColor: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  wrapPaper: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

WatchList.propTypes = {};

function WatchList(props) {
  const classes = useStyles();

  return (
    <div>
      {/* <Container maxWidth="md" className={classes.bgColor}> */}
      <Typography variant="h5" gutterBottom>
        Danh sách của tôi
      </Typography>
      <Container className={classes.wrapPaper}>
        <Paper variant="outlined" />
        <Paper variant="outlined" />
      </Container>
      {/* </Container> */}
    </div>
  );
}

export default WatchList;
