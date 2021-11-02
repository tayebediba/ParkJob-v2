import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import logos from "./../../assets/Icons/dashboardIcon/logos.svg";

import premium2 from "../../assets/Icons/home/premium2.svg";

import {
  ExpandLess,
  ExpandMore,
  HomeOutlined,
  PeopleOutline,
  FilterTiltShift,
  DescriptionOutlined,
  MeetingRoomOutlined,
  InfoOutlined,
} from "@material-ui/icons";
import { Button, Collapse } from "@material-ui/core";
import { Link } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
    backgroundColor: "#002e6e",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpens(!opens);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ direction: "ltr" }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton>
            <Link to="/login">
              <MeetingRoomOutlined style={{ color: "#fff" }} />
            </Link>
          </IconButton>
          <div>
            <img style={{ width: "5rem" }} src={logos} alt="parkJab-logo" />
          </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon style={{ color: "#fff" }} />
            ) : (
              <ChevronRightIcon style={{ color: "#fff" }} />
            )}
          </IconButton>
          <div>
            <img style={{ width: "5rem" }} src={logos} alt="parkJab-logo" />
          </div>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeOutlined />
            </ListItemIcon>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <ListItemText primary="صفحه اصلی" />
            </Link>
          </ListItem>
          <Divider />

          <ListItem button>
            <ListItemIcon>
              <PeopleOutline />
            </ListItemIcon>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/Freelancers"
            >
              <ListItemText primary="فریلنسرها" />
            </Link>
          </ListItem>
        </List>
        <Divider />

        <List>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <DescriptionOutlined />
            </ListItemIcon>
            <ListItemText primary="پروژه ها" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={!opens} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <FilterTiltShift />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/ProjectsList"
                >
                  <ListItemText primary="طراحی گرافیک" />
                </Link>{" "}
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <FilterTiltShift />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/ProjectsList"
                >
                  <ListItemText primary="تولید محتوا" />
                </Link>{" "}
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <FilterTiltShift />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/ProjectsList"
                >
                  <ListItemText primary="ترجمه و تایپ" />
                </Link>{" "}
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <FilterTiltShift />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/ProjectsList"
                >
                  <ListItemText primary="دیجیتال مارکتینگ سئو" />
                </Link>{" "}
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <FilterTiltShift />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/ProjectsList"
                >
                  <ListItemText primary="عکس ,انیمیشن و ویدئو" />
                </Link>{" "}
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <FilterTiltShift />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/ProjectsList"
                >
                  <ListItemText primary="طراحی سایت" />
                </Link>{" "}
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <FilterTiltShift />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/ProjectsList"
                >
                  <ListItemText primary="برنامه نویسی , نرم افزار" />
                </Link>{" "}
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <FilterTiltShift />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/ProjectsList"
                >
                  <ListItemText primary="سایر کسب و کارها" />
                </Link>{" "}
              </ListItem>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon className={classes.iconlogin}>
              <img src={premium2} alt="gem" />
            </ListItemIcon>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/PricingTableCommonPage"
            >
              <ListItemText primary="طرح های عضویت" />
            </Link>{" "}
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <InfoOutlined />
            </ListItemIcon>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/HomeAboutUs"
            >
              <ListItemText primary="درباره ما" />
            </Link>{" "}
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
