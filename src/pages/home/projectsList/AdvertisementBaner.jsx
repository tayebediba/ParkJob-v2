import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./projectsList.module.css";

const AdvertisementBaner = () => {
  return (
    <Grid container justifyContent="space-between" style={{ display: "flex" }}>
      <Grid item md={6} xs={12}>
        {" "}
        <h3 style={{ marginBottom: "2rem" }}>طراحی بنرهای تبلیغاتی</h3>
        <Typography>
          طرح نما به متنی آزمایشی و بی معنی در صنعت چاپ , صفحه آرایی و طراحی
          گرافیک گفته میشود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی
          برای پر کردن صفحه آرایه شکل ...
        </Typography>
        <div className={classes.skillsBox}>
          <span className={classes.labelSkill}>Adobe Photoshop</span>
          <span className={classes.labelSkill}>Adobe Illustrator</span>
          <span className={classes.labelSkill}>Branding</span>
          <span className={classes.labelSkill}>Adobe Photoshop</span>
          <span className={classes.labelSkill}>Adobe Illustrator</span>
          <span className={classes.labelSkill}>Branding</span>
        </div>
      </Grid>
      <Grid container item xs={12} md={5}>
        <Grid item xs={12} md={4} className={classes.informationCard}>
          <Typography color="textSecondary" variant="caption">
            مدت ارسال پیشنهاد
          </Typography>
          <span style={{ marginTop: ".25rem" }}>5روز و 7 ساعت</span>
        </Grid>
        <Grid item md={4} xs={12} className={classes.informationCard}>
          <Typography color="textSecondary" variant="caption">
            تعداد پیشنهادات
          </Typography>
          <span style={{ marginTop: ".25rem" }}>15 پیشنهاد</span>
        </Grid>
        <Grid item md={4} xs={12} className={classes.informationCard}>
          <Typography color="textSecondary" variant="caption">
            بودجه ویژه(ریال)
          </Typography>
          <span style={{ marginTop: ".25rem" }}>50,000,000</span>
        </Grid>
        <div className={classes.boxLink}>
          <div>
            {" "}
            <Link
              style={{
                textDecoration: "none",
                width: "4rem",
                borderRadius: ".5rem",
                margin: ".5rem",
                padding: ".5rem",
                background: "#FFF3D5",
                color: "#FDB05E",
              }}
              to=""
            >
              خصوصی
            </Link>
          </div>
          <div>
            {" "}
            <Link
              to=""
              style={{
                textDecoration: "none",
                width: "4rem",
                borderRadius: ".5rem",
                margin: ".5rem",
                padding: ".5rem",
                background: "#D4F5EA",
                color: "#009764",
              }}
            >
              برجسته
            </Link>
          </div>
          <div>
            {" "}
            <Link
              to=""
              style={{
                textDecoration: "none",
                width: "4rem",
                borderRadius: ".5rem",
                margin: ".5rem",
                padding: ".5rem",
                background: "#FFCACC",
                color: "#F1554C",
              }}
            >
              فوری
            </Link>
          </div>
          <div>
            <Link
              to=""
              style={{
                textDecoration: "none",
                width: "4rem",
                borderRadius: ".5rem",
                margin: ".5rem",
                padding: ".5rem",
                background: "#ECF1FF",
                color: "#002E6E",
              }}
            >
              ویژه
            </Link>
          </div>
        </div>
        <Grid item xs={12} className={classes.ButtonBox}>
          <Button variant="contained" color="primary" style={{ width: "40%" }}>
            مشاهده پروژه
          </Button>
          <Button
            className={classes.recordBtn}
            color="primary"
            style={{
              backgroundColor: "#fff",
              fontWeight: "bold",
              marginRight: "1rem",
              width: "40%",
            }}
            variant="outlined"
          >
            ثبت پیشنهاد برای پروژه
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AdvertisementBaner;
