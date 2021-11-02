import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";
import Avatar from "../../../assets/img/avatar.jpg";
import { Link } from "react-router-dom";
import classes from "./profile.module.css";

function Profile() {
  return (
    <Grid container item xs={12} direction="column">
      <h3 style={{ paddingBottom: "2rem", margin: "0" }}>اطلاعات فردی</h3>

      <Paper
        className="cardMessages"
        style={{ height: "25rem", borderRadius: "1rem" }}
      >
        <div className="EditProfileTitle">
          <Grid
            container
            item
            xs={12}
            justify="space-between"
            direction="row"
            className="cardTitle"
          >
            <div>
              <AccountCircleIcon />
              <p>اطلاعات فردی</p>
            </div>
            <Link
              style={{ cursor: "pointer", textDecoration: "none" }}
              to="/dashboard/editprofile"
            >
              <div>
                <Typography className="color-blue">ویرایش</Typography>
                <EditIcon className="color-blue" />
              </div>
            </Link>
          </Grid>
        </div>
        <Grid container item xs={12} direction="row" alignItems="center">
          <Grid container item xs={6} direction="row">
            <Grid
              container
              item
              xs={12}
              justify="flex-start"
              direction="row"
              className="avatar"
            >
              <Grid
                container
                item
                xs={8}
                md={5}
                justify="flex-end"
                direction="row"
              >
                <img
                  className={classes.imgProfiledashboard}
                  src={Avatar}
                  alt=""
                />
              </Grid>
              <Grid
                container
                item
                xs={12}
                md={6}
                justify="flex-start"
                direction="row"
              >
                <div className="upload">
                  <div style={{ width: "100%", margin: "0 10px" }}>
                    <h2>علی محمدی</h2>
                  </div>
                  <div style={{ width: "100%", margin: "0 10px" }}>
                    <span>تهران</span>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={6} direction="row">
            <Grid
              container
              item
              xs={12}
              direction="row"
              style={{
                fontSize: 14,
                borderRight: "1px solid gray",
                padding: "0 15px 0 0",
                lineHeight: 3,
              }}
            >
              <Grid container item xs={12} md={3} direction="row">
                سال تولد
              </Grid>
              <Grid
                container
                item
                xs={9}
                direction="row"
                style={{ fontWeight: "bold" }}
              >
                1370
              </Grid>
              <Grid container item xs={12} md={3} direction="row">
                شماره همراه
              </Grid>
              <Grid
                container
                item
                xs={9}
                direction="row"
                style={{ fontWeight: "bold" }}
              >
                010185634908
              </Grid>
              <Grid container item xs={12} md={3} direction="row">
                ایمیل
              </Grid>
              <Grid
                container
                item
                xs={9}
                direction="row"
                style={{ fontWeight: "bold" }}
              >
                info@gmail.com
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            direction="row"
            className={classes.aboutMe}
          >
            <Grid container item xs={12} direction="row">
              درباره من
            </Grid>
            <Grid
              container
              item
              xs={12}
              direction="row"
              style={{ fontWeight: "bold" }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون{" "}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Profile;
