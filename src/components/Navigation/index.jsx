import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#2B4965',
  },
  actionItem: {
    '&$selected': {
      color: '#E29E21',
    },
  },
  selected: {},
  textLight: {
    color: '#C2CFE0',
  },
});

const Navigation = () => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    // if (value === 0) {
    //   history.push("/");
    // } else if (value === 1) {
    //   history.push("/movies");
    // } else if (value === 2) {
    //   history.push("/tv-series");
    // } else {
    //   history.push("/search");
    // }
    value === 0
      ? history.push('/')
      : value === 1
      ? history.push('/movies')
      : value === 2
      ? history.push('/tv-series')
      : history.push('/search');
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        classes={{
          root: classes.actionItem,
          selected: classes.selected,
        }}
        className={classes.textLight}
        label="Trending"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        classes={{
          root: classes.actionItem,
          selected: classes.selected,
        }}
        className={classes.textLight}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        classes={{
          root: classes.actionItem,
          selected: classes.selected,
        }}
        className={classes.textLight}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        classes={{
          root: classes.actionItem,
          selected: classes.selected,
        }}
        className={classes.textLight}
        label="Search"
        icon={<SearchIcon />}
      />
      {/* <BottomNavigationAction className={classes.textLight} label="Trending" icon={<FavoriteIcon />} />
      <BottomNavigationAction className={classes.textLight} label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction className={classes.textLight} label="TV Series" icon={<TvIcon />} />
      <BottomNavigationAction className={classes.textLight} label="Search" icon={<SearchIcon />} /> */}
    </BottomNavigation>
  );
};

export default Navigation;
