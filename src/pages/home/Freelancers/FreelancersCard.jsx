import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import classes from "./freelancers.module.css";
import { Rating } from "@material-ui/lab";
import { LocationOn, AssignmentTurnedIn, DateRange } from "@material-ui/icons";
import { Link } from "react-router-dom";

const FreelancersCard = () => {
  return (
    <Card className={classes.FreelancersCard}>
      <Grid container justify="center" className={classes.userProfileContainer}>
        <Avatar
          style={{ height: "9rem", width: "9rem" }}
          // src={}
          alt="profpic"
        />
      </Grid>
      <CardContent>
        <Typography>username</Typography>
        <Typography color="textSecondary">گرافیست و طراح لوگو</Typography>
        <Box
          component="fieldset"
          mb={3}
          borderColor="transparent"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography style={{ paddingTop: ".5rem" }}>9.5</Typography>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
        </Box>
        <div className={classes.boxHeader}>
          <div>
            <LocationOn />
            <span>city</span>
          </div>
          <div>
            <AssignmentTurnedIn />
            <span>50پروژه</span>
          </div>
          <div>
            <DateRange />
            <span>دوروز پیش</span>
          </div>
        </div>
        <div className={classes.btns}>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Button
              className={classes.btnInvitation}
              variant="contained"
              color="primary"
            >
              دعوت به همکاری
            </Button>
          </Link>
          <Link to="/FreelancerRate" style={{ textDecoration: "none" }}>
            <Button variant="contained">مشاهده پروفایل</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
export default FreelancersCard;
