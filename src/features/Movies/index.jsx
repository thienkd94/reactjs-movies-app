import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import axios from "axios";
import React, { useState } from "react";
import WatchList from "./pages/WatchList";
import { Route, Switch } from "react-router-dom";
import Watched from "./pages/Watched";
import "./styles.scss";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
MovieFeature.propTypes = {};

const useStyles = makeStyles((theme) => ({
  result: { padding: 0 },
  result__img: {
    width: "100px",
    height: "auto",
    borderRadius: 0,
    marginRight: "15px",
  },
  emptyImg: {
    width: "100px",
    height: "150px",
    borderRadius: 0,
    marginRight: "15px",
  },
}));

function MovieFeature(props) {
  const classes = useStyles();
  const [watchList, setWatchList] = useState([]);
  const [results, setResults] = useState([]);

  const handleMovieFormChange = (e) => {
    if (e.target.value) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=b3c1945e566d304541e10715aa84c29b&language=vi-VN&query=${e.target.value}`
        )
        .then((res) => {
          setResults(res.data.results);
        });
    } else {
      setResults([]);
    }
  };

  const getMovieId = (movie) => {
    // const newWatchList = [...watchList];
    const newWatchList= [movie, ...watchList]
    // newWatchList.push(movie);
    setWatchList(newWatchList)
  }

  return (
    <div>
      <Container className="wrapper" maxWidth="md">
        <Box py="2rem">
          <TextField
            onChange={(e) => handleMovieFormChange(e)}
            label="Search for a movie"
            variant="outlined"
            fullWidth
          />
          <List className={classes.result}>
            {results.map((item) => {
              return (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      {item.poster_path ? (
                        <Avatar
                          className={classes.result__img}
                          alt="Remy Sharp"
                          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                        />
                      ) : (
                        <Avatar className={classes.emptyImg}>Empty</Avatar>
                      )}
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className=""
                            color="textPrimary"
                          >
                            {item.release_date ? item.release_date : ""}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => getMovieId(item)}
                    >
                      Thêm vào danh sách xem
                    </Button>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              );
            })}
          </List>
        </Box>

        {!watchList.length > 0 && (
          <Typography
            variant="overline"
            align="center"
            display="block"
            gutterBottom
          >
            Chưa có bộ phim nào trong danh sách
          </Typography>
        )}

        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="flex-start"
          m={0}
          width="100%"
          bgcolor="warning.main"
        >
          {/* <Box p={1} width={1 / 6}>
            <img
              src="https://image.tmdb.org/t/p/w154/5iHZ6KUSnLEnStXJ6BfFA5Uk2PT.jpg"
              alt=""
            />
          </Box> */}
          {watchList.length > 0 &&
            watchList.map((movie) => {
              return (
                <Box p={0} width={1 / 6} height="100%">
                  <Box p={1}>
                    <img
                      src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                      alt={movie.title}
                      width="100%"
                      height="100%"
                    />
                  </Box>
                </Box>
              );
            })}
          {/* <Box p={1} width={1/6}>
            <img
              src="https://image.tmdb.org/t/p/w154/ppJaim4HoOMEoFVlZMagEspIs2j.jpg"
              alt=""
            />
          </Box>
          <Box p={1} width={1/6}>
            <img
              src="https://image.tmdb.org/t/p/w154/qwItHvBIkwBcGGanLjsHNEbIJdB.jpg"
              alt=""
            />
          </Box>
          <Box p={1} width={1/6}>
            <img
              src="https://image.tmdb.org/t/p/w154/5iHZ6KUSnLEnStXJ6BfFA5Uk2PT.jpg"
              alt=""
            />
          </Box>
          <Box p={1} width={1/6}>
            <img
              src="https://image.tmdb.org/t/p/w154/ppJaim4HoOMEoFVlZMagEspIs2j.jpg"
              alt=""
            />
          </Box>
          <Box p={1} width={1/6}>
            <img
              src="https://image.tmdb.org/t/p/w154/qwItHvBIkwBcGGanLjsHNEbIJdB.jpg"
              alt=""
            />
          </Box> */}
        </Box>

        {/* <Switch>
          <Route path="/">
            <WatchList />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
        </Switch> */}
      </Container>
    </div>
  );
}

export default MovieFeature;
