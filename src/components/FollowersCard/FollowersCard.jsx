import { Button, Grid, Paper } from "@material-ui/core";
import React from "react";
import "./followersCard.css";
function FollowersCard({ name, username, bio, pic, follow }) {
  const profpic = pic;
  return (
    <Grid
      container
      className="followersCard"
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: 25 }}
    >
      <Paper className="PaperFollowersCard">
        <Grid item md={3} xs={12} justify="space-around">
          <img src={profpic} alt="profpic" className="profPic" />
        </Grid>
        <Grid item md={6} xs={12} alignItems="center" wrap="wrap">
          <Grid item xs={12} alignItems="center">
            <h3>{name}</h3>
          </Grid>
          <Grid item xs={12} alignItems="center">
            <span style={{ color: "gray" }}>{username}</span>
          </Grid>
          <Grid item xs={12} alignItems="center">
            <span>{bio}</span>
          </Grid>
        </Grid>
        <Grid md={3} xs={12} alignItems="center" justify="space-around">
          {follow ? (
            <Grid xs={12} alignItems="center" justify="space-around">
              <Grid xs={12} alignItems="center" justify="space-around">
                <Button
                  variant="outlined"
                  color="primary"
                  disabled
                  style={{
                    margin: "5px 0px",
                    padding: "6px 23px",
                    fontFamily: "Dana",
                    fontSize: 13,
                  }}
                >
                  دنبال می کنید
                </Button>
              </Grid>
              <Grid xs={12} alignItems="center" justify="space-around">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    margin: "5px 0px",
                    fontFamily: "Dana",
                    fontSize: 13,
                  }}
                >
                  مشاهده پروفایل
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid xs={12} alignItems="center" justify="space-around">
              <Grid xs={12} alignItems="center" justify="space-around">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    margin: "5px 0px",
                    padding: "6px 31px",
                    fontFamily: "Dana",
                    fontSize: 13,
                  }}
                >
                  دنبال کردن
                </Button>
              </Grid>
              <Grid xs={12} alignItems="center" justify="space-around">
                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    margin: "5px 0px",
                    fontFamily: "Dana",
                    fontSize: 13,
                  }}
                >
                  مشاهده پروفایل
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Grid>
  );
}

export default FollowersCard;
