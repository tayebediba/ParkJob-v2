import { Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowDropDown } from "@material-ui/icons";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import style from "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2.1rem",
  },
  title: {
    color: "#192129",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  avatarBox: {
    display: "flex",
    alignItems: "center",
    fontSize: ".95rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [displayBtn, setDisplayBtn] = useState(false);
  const handleDisplayBtn = () => {
    setDisplayBtn(!displayBtn);
  };

  return (
    <Grid container>
      <Paper className={classes.paper} id="paper">
        <h2 className={classes.title}></h2>

        <div
          onClick={handleDisplayBtn}
          className={classes.avatarBox}
          id="AccountCircle"
        >
          {/* <span>علی محمدی</span> */}

          <AccountCircle
            id="AccountCircleIcon"
            color="primary"
            fontSize="large"
          />
        </div>
      </Paper>
      <Paper className={displayBtn ? "ShowdivPaper" : "divPaper"} elevation={3}>
        <Button className="butttonSettings">
          {" "}
          <Link className="LinkDivPaper" to="/dashboard">
            <SettingsIcon className="LinkDivPapeIcon" />
            تنظیمات حساب کاربری
          </Link>
        </Button>
        <Button className="butttonLogout">
          <Link className="LinkDivPaper2" to="/dashboard">
            <ExitToAppIcon className="LinkDivPapeIcon" />
            خروج
          </Link>
        </Button>
      </Paper>
    </Grid>
  );
};

export default Navbar;
