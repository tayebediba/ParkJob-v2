import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowDropDown } from "@material-ui/icons";
import AccountCircle from "@material-ui/icons/AccountCircle";
import style from "./navbar..module.css";

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

  return (
    <Grid container>
      <Paper className={classes.paper} id={style.paper}>
        <h2 className={classes.title}></h2>
        <div className={classes.avatarBox} id={style.AccountCircle}>
          {/* <span>علی محمدی</span> */}
          <AccountCircle
            id={style.AccountCircleIcon}
            color="primary"
            fontSize="large"
          />
        </div>
      </Paper>
    </Grid>
  );
};

export default Navbar;
