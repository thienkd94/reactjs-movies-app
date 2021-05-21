import React, { useState } from 'react';
import MovieFeature from './features/Movies';
import Header from './components/Header';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   button: {
//     color: "white",
//   },
//   bgColor: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//   },
//   wrapPaper: {
//     display: "flex",
//     "& > *": {
//       margin: theme.spacing(1),
//       width: theme.spacing(16),
//       height: theme.spacing(16),
//     },
//   },
// }));

function App() {
  // const classes = useStyles();

  // const theme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       main: green[500],
  //     },
  //   },
  // });
  //   const [movies, setMovies] = useState([]);

  //   useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/search/movie?api_key=b3c1945e566d304541e10715aa84c29b&language=vi-VN&page=1&include_adult=false&query=star"
  //     )
  //     .then(function (response) {
  //       setMovies(response.data.results)
  //       console.log(response.data.results);
  //     });
  // }, []);

  return (
    // <div className={classes.root}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton
    //         edge="start"
    //         className={classes.menuButton}
    //         color="inherit"
    //         aria-label="menu"
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" className={classes.title}>
    //         Movies Watch List
    //       </Typography>
    //       <Button color="inherit">Watch list</Button>
    //       <Button color="inherit">Watched</Button>
    //       <ThemeProvider theme={theme}>
    //         <Button
    //           variant="contained"
    //           color="primary"
    //           size="large"
    //           className={classes.button}
    //           startIcon={<AddIcon />}
    //         >
    //           Add
    //         </Button>
    //       </ThemeProvider>
    //     </Toolbar>
    //   </AppBar>
    //   <Container maxWidth="md" className={classes.bgColor}>
    //     <Typography variant="h5" gutterBottom>
    //       My Watch List
    //     </Typography>
    //     <Container className={classes.wrapPaper}>
    //       <Paper variant="outlined" />
    //       <Paper variant="outlined" />
    //     </Container>
    //   </Container>
    // </div>
    <div>
      <Header />
      <MovieFeature />
    </div>
  );
}

export default App;
