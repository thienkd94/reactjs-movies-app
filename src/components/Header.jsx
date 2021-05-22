import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { NavLink } from "react-router-dom";

Header.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    fontWeight: "500",
    padding: "7px 15px",
    textDecoration: "none",
    transition: "ease-in-out 0.5s",
    "&:hover": {
      color: "#FF886F",
    },
  },
  activeNav: {
    color: "#FF886F",
    fontWeight: "500",
  },
  button: {
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    color: "white",
    padding: "7px 15px",
    textDecoration: "none",
    backgroundColor: "#29a329",
    transition: "ease-in-out 0.5s",
    "&:hover": {
      backgroundColor: "#1f7a1f",
    },
  },
}));

function Header(props) {
  const classes = useStyles();

  // const theme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       main: green[500],
  //     },
  //   },
  // });

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Movies Watch List
          </Typography>

          <NavLink
            to="/"
            exact
            className={classes.link}
            activeClassName={classes.activeNav}
          >
            Danh sách
          </NavLink>
          <NavLink
            to="/watched"
            exact
            className={classes.link}
            activeClassName={classes.activeNav}
          >
            Đã xem
          </NavLink>
          <NavLink to="/add" className={classes.button}>
            <AddIcon />
            Thêm
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
