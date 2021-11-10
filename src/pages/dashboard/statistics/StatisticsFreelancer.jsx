import React, { useEffect } from "react";
import { Button, Paper, Grid, Tabs, Tab } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import "./statisticsFreelancer.css";
import { Link, Route } from "react-router-dom";
import DateRangeIcon from "@material-ui/icons/DateRange";
import DescriptionIcon from "@material-ui/icons/Description";
import finished from "../../../assets/Icons/dashboardIcon/finished.svg";
import prosess from "../../../assets/Icons/dashboardIcon/prosess.svg";
import pending from "../../../assets/Icons/dashboardIcon/pending.svg";
import medal from "../../../assets/Icons/dashboardIcon/medal.svg";
import comment from "../../../assets/Icons/dashboardIcon/comment.svg";
import profile from "../../../assets/Icons/dashboardIcon/profile.svg";
import star from "../../../assets/Icons/dashboardIcon/star.svg";
import ChartsPage from "./ChartsPage";
import { scrollHandler } from "../../../helper/general";

function StatisticsFreelancer(props) {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    scrollHandler(0, 0);
  }, []);
  return (
    <div>
      <h3 style={{ paddingBottom: "2rem", margin: "0" }}>آمار عملکردها</h3>

      <Grid container justifyContent="space-between" className="tab-date">
        <div>
          <Paper className="tabs" elevation={0}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab className="tab" label="سه ماه گذشته" />
              <Tab className="tab" label="شش ماه گذشته" />
              <Tab className="tab" label="سال گذشته" />
              <Tab className="tab" label="تا به امروز" />
            </Tabs>
          </Paper>
        </div>
        <div className="data-svg">
          <Link
            to={props.match.url + ""}
            style={{ textDecoration: "none", paddingTop: "0.5rem" }}
          >
            <span style={{ paddingTop: "1rem", color: "#909599" }}>
              {" "}
              1400/03/09 - 1400/06/09
            </span>
          </Link>
          <DateRangeIcon color="disabled" />
        </div>
      </Grid>
      <Paper
        item
        xs={12}
        style={{ padding: "1rem", borderRadius: "1rem", marginTop: "2rem" }}
      >
        <Grid container item xs={12} direction="row" alignItems="center">
          <Grid
            item
            sm={3}
            container
            item
            xs={12}
            justify="flex-start"
            display="flex"
            className="statistics-card"
          >
            <div className="svg-box" style={{ backgroundColor: "#f8bdbf" }}>
              <DescriptionIcon style={{ fontSize: "2.5rem" }} />
            </div>
            <div className="upload">
              <div style={{ width: "80%", margin: "0 .25rem" }}>
                <h5>تعداد پروژه های شما</h5>
              </div>
              <div
                style={{ width: "100%", margin: "0 10px", fontWeight: "bold" }}
              >
                <span>50</span>
              </div>
            </div>
          </Grid>
          <Grid
            item
            sm={3}
            container
            item
            xs={12}
            justify="flex-start"
            display="flex"
            className="statistics-card"
          >
            <div className="svg-box" style={{ backgroundColor: "#D4F5EA" }}>
              <img
                src={finished}
                alt="finished-logo"
                style={{ height: "2.5rem", width: "2.5rem" }}
              />
            </div>
            <div className="upload">
              <div style={{ width: "80%", margin: "0 .25rem" }}>
                <h5>پروژه های پایان یافته</h5>
              </div>
              <div
                style={{ width: "100%", margin: "0 10px", fontWeight: "bold" }}
              >
                <span>40</span>
              </div>
            </div>
          </Grid>
          <Grid
            item
            sm={3}
            container
            item
            xs={12}
            justify="flex-start"
            display="flex"
            className="statistics-card"
          >
            <div className="svg-box" style={{ backgroundColor: "#ECF1FF" }}>
              <img
                src={prosess}
                alt="prosess-logo"
                style={{ height: "2.5rem", width: "2.5rem" }}
              />
            </div>
            <div className="upload">
              <div style={{ width: "80%", margin: "0 .25rem" }}>
                <h5>پروژه های درحال اجرا</h5>
              </div>
              <div
                style={{ width: "100%", margin: "0 10px", fontWeight: "bold" }}
              >
                <span>5</span>
              </div>
            </div>
          </Grid>
          <Grid
            item
            sm={3}
            container
            item
            xs={12}
            justify="flex-start"
            display="flex"
            style={{
              fontSize: 14,
              alignItems: "center",
              padding: "0 15px 0 0",
            }}
          >
            <div className="svg-box" style={{ backgroundColor: "#FFF3D5" }}>
              <img
                src={pending}
                alt="pending-logo"
                style={{ height: "2.5rem", width: "2.5rem" }}
              />
            </div>
            <div className="upload">
              <div style={{ width: "80%", margin: "0 .25rem" }}>
                <h5>پروژه های درحال بررسی</h5>
              </div>
              <div
                style={{ width: "100%", margin: "0 10px", fontWeight: "bold" }}
              >
                <span>5</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Grid
        container
        item
        xs={12}
        direction="row"
        justifyContent="space-around"
      >
        <Grid
          container
          item
          md={9}
          xs={12}
          direction="row"
          justifyContent="space-between"
        >
          <Paper className="chart-box">
            <ChartsPage />
          </Paper>
          <Grid
            container
            item
            direction="row"
            alignContent="space-between"
            spacing={2}
          >
            <Grid item md={6} xs={12}>
              <Paper className="card-header">
                <div className="svg-box">
                  <img
                    src={profile}
                    alt="profile-logo"
                    style={{ height: "2.5rem", width: "2.5rem" }}
                  />
                </div>
                <div className="upload">
                  <div style={{ width: "80%", margin: "0 .25rem" }}>
                    <h5>تعداد بازدیدکنندگان از پیج شما</h5>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      margin: "0 10px",
                      fontWeight: "bold",
                    }}
                  >
                    <span>300</span>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper className="card-header">
                <div
                  className="svg-box"
                  style={{
                    backgroundColor: "#ECF1FF",
                    width: "min-content",
                    marginTop: ".25rem",
                  }}
                >
                  <img
                    src={star}
                    alt="star-logo"
                    style={{ height: "2.5rem", width: "2.5rem" }}
                  />
                </div>
                <div className="upload">
                  <div style={{ width: "80%", margin: "0 .25rem" }}>
                    <h5>نمونه کارهای پسندیده شما</h5>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      margin: "0 10px",
                      fontWeight: "bold",
                      width: "100%",
                    }}
                  >
                    <span>20</span>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container item md={2} xs={12}>
          <Paper
            item
            xs={9}
            style={{
              padding: "1rem",
              borderRadius: "1rem",
              marginTop: "2rem",
              width: "100%",
            }}
          >
            <div
              className="svg-box"
              style={{ backgroundColor: "#ECF1FF", width: "min-content" }}
            >
              <img
                src={medal}
                alt="pending-logo"
                style={{ height: "2.5rem", width: "2.5rem" }}
              />
            </div>
            <div style={{ width: "80%", margin: "0 .25rem" }}>
              <h5>امتیاز کل دریافت شده</h5>
            </div>
            <div
              style={{ width: "100%", margin: "0 10px", fontWeight: "bold" }}
            >
              <span>9.5</span>
            </div>
            <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
          </Paper>
          <Paper
            item
            xs={9}
            style={{
              padding: "1rem",
              borderRadius: "1rem",
              marginTop: "2rem",
              width: "100%",
            }}
          >
            <div
              className="svg-box"
              style={{ backgroundColor: "#ECF1FF", width: "min-content" }}
            >
              <img
                src={comment}
                alt="pending-logo"
                style={{ height: "2.5rem", width: "2.5rem" }}
              />
            </div>
            <div style={{ width: "80%", margin: "0 .25rem" }}>
              <h5>پیشنهادهای ارسال شده</h5>
            </div>
            <div
              style={{ width: "100%", margin: "0 10px", fontWeight: "bold" }}
            >
              <span>80</span>
            </div>
            <Link
              to={props.match.url + ""}
              color="primary"
              style={{ textDecoration: "none", fontSize: "11px" }}
            >
              مشاهده لیست پروژه ها
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default StatisticsFreelancer;
