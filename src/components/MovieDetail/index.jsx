import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import PropTypes from 'prop-types';
import React from 'react';
import { BASE_IMAGE_URL } from '../../config/main';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

MovieDetail.propTypes = {
  result: PropTypes.object.isRequired,
};

function MovieDetail(props) {
  const classes = useStyles();
  const { result } = props;

  console.log(result);

  return (
    <div className="detail">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <Image
              src={`${BASE_IMAGE_URL}${result.poster_path}`}
              animationDuration={500}
              // imageStyle={{ height: 'auto' }}
              aspectRatio={0.8}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography variant="h4" gutterBottom>
              {result.title || result.name}
            </Typography>
            <Divider />
            {/* <Grid>
            <Typography variant="body1" gutterBottom>
              Genre:
            </Typography>
          </Grid> */}
            <Grid>
              <Typography variant="body1" gutterBottom>
                Runtime: {result.runtime} minutes
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1" gutterBottom>
                Release date: {result.release_date}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1" gutterBottom>
                Overview: {result.overview}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default MovieDetail;
