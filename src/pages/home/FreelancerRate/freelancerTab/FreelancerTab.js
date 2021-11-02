import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Box, Grid } from "@material-ui/core";
import WorkSamplesTab from "./WorkSamples/WorkSamplesTab";
import classes from "./freelancerTab.module.css";
import EmployersCommentsTab from "./EmployersComments/EmployersCommentsTab";

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
    margin: "1rem",
  },
}));

const FreelancerTab = () => {
  const styles = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
            className={classes.textSize}
            style={{ fontSize: "large", fontWeight: "bold" }}
            label="نمونه کار"
            {...a11yProps(0)}
          />
          <Tab
            className={classes.textSize}
            style={{ fontSize: "large", fontWeight: "bold" }}
            label="نظر کارفرمایان"
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <TabPanel style={{ height: "100%" }} value={value} index={0}>
        <Grid container>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <WorkSamplesTab key={item} />
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <EmployersCommentsTab key={item} />
        ))}
      </TabPanel>
    </div>
  );
};

export default FreelancerTab;
