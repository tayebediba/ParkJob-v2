import { Grid, Box } from "@material-ui/core";
import React from "react";
import profpic from "../../assets/img/avatar.jpg";
import Rating from "@material-ui/lab/Rating";
import vectorprofile from "../../../src/assets/Icons/dashboardIcon/vectorprofile.svg";
function UserProfile() {
  const [value, setValue] = React.useState(3.5);
  return (
    <Grid container alignContent="flex-start" style={{ marginTop: 25 }}>
      <div className="userProfile">
        <Grid xs={12} item justify="center" className="userProfileContainer">
          <img src={profpic} alt="profpic" className="userProfPic" />
        </Grid>
        <Grid xs={12} item justify="center" className="userProfileContainer">
          <h2>مسعود شاطرآبادی</h2>
        </Grid>
        <Grid xs={12} item justify="center" className="userProfileContainer">
          <h4>masoodsh77</h4>
        </Grid>
        <Grid xs={12} item justify="center" className="userProfileContainer">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              precision={0.5}
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
        </Grid>
        <Grid xs={12} item container justify="center">
          <Grid item xs={6} justify="center" className="userProfileContainer">
            <Grid xs={12} item className="userProfileContainer">
              1000
            </Grid>
            <Grid xs={12} item className="userProfileContainer ">
              <span className="userProfileFollower">دنبال کردن</span>
            </Grid>
          </Grid>
          <Grid item xs={6} justify="center" className="userProfileContainer">
            <Grid xs={12} item className="userProfileContainer">
              2050
            </Grid>
            <Grid xs={12} item className="userProfileContainer ">
              <span className="userProfileFollower">دنبال کننده ها</span>
            </Grid>
          </Grid>
        </Grid>
        <img src={vectorprofile} alt="vectorprofile" />
      </div>
    </Grid>
  );
}

export default UserProfile;
