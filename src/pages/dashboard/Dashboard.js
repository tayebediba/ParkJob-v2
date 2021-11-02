import { Route, Switch } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import "./dashboard.css";
import dashboardRoutes from "../../Routes/DashboardRoutes";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Box, Grid } from "@material-ui/core";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    // margin: "1rem",
  },
}));

const Doshboard = () => {
  const styles = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container className="container">
      <Grid xs={3} item style={{ maxWidth: "19%", flexBasis: "0%" }}>
        <Sidebar />
      </Grid>
      <Grid item md={9} xs={12} style={{ maxWidth: "100%", flexBasis: "81%" }}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid
          xs={12}
          item
          className="dashboardContent"
          style={{ maxWidth: "100%", flexBasis: "100%" }}
        >
          <div className={styles.root}>
            <AppBar
              position="static"
              color="transparent"
              elevation={0}
              style={{ borderBottom: "1px solid #C4CAD0" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="inherit"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab
                  style={{ fontSize: "large", fontWeight: "bold" }}
                  label="فریلنسر"
                  {...a11yProps(0)}
                />
                <Tab
                  style={{ fontSize: "large", fontWeight: "bold" }}
                  label=" کارفرما "
                  {...a11yProps(1)}
                />
              </Tabs>
            </AppBar>
            <Switch>
              <TabPanel style={{ height: "100%" }} value={value} index={0}>
                <Grid container>
                  {dashboardRoutes.map(({ path, exact, Component }, i) => {
                    return (
                      <Route
                        key={i}
                        path={path}
                        exact={exact}
                        render={(props) => <Component {...props} />}
                      />
                    );
                  })}
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                2
              </TabPanel>
            </Switch>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Doshboard;
