import { Grid } from "@material-ui/core";
import React from "react";
import classes from "./freelancerTab.module.css";
import freelancertab1 from "../../../../assets/img/home/freelansertab1.png";
import freelancertab2 from "../../../../assets/img/home/freelancertab2.png";

const FreelancerTab = () => {
  const text1 = [
    {
      text: "پس از ورود به حساب کاربری خود از منوی سمت راست در قسمت ویرایش پروفایل می توانید اطلاعات خود را وارد کنید.",
      num: 1,
    },
    {
      text: "در قسمت اطلاعات فردی , مشخصات خود مثل نام ,شماره تلفن همراه ,عکس پروفایل و... را وارد می کنید.",
      num: 2,
    },
    {
      text: "در صفحه رزومه بخش اول دسته بندی و سپس مهارت خود را انتخاب میکنید.",
      num: 3,
    },
    {
      text: "در بخش دوم مربوط به سوابق شغلی شما می باشد.چنانچه در جایی مشغول به کار بوده یا هستید, اطلاعات آن را بنویسید.",
      num: 4,
    },
    { text: "سومین قسمت از صفحه رزومه مربوط به سوابق تحصیلی می باشد.", num: 5 },
    {
      text: "و در بخش اخر نیز می توانید در صورت داشتن نمومنه کار اطلاعات و عکس آن را آپلود کنید.",
      num: 6,
    },
  ];
  const text2 = [
    {
      text: "پس از تکمیل پروفایل خود می توانید همه پروژه ها یا مختص مهارت خود را از لیست انتخاب کنید.",
      num: 1,
    },
    {
      text: "همچنین می توانید از فیلترها استفاده کرده و جستوجوی دقیق تری داشته باشید.",
      num: 2,
    },
    {
      text: "پس از یافتن پروژه اطلاعات آن را با دقت مطالعه کنید.",
      num: 3,
    },
    {
      text: "در صورت داشتن توانایی برای انجام پروژه , با زدن دکمه ثبت پیشنهاد مبلغ و زمان پیشنهادی خود را درج کنید.",
      num: 4,
    },
    {
      text: "پس از ثبت پیشنهاد توسط شما و تایید توسط کارفرما ,در قسمت پیام ها می توانید با کارفرما مذاکره کنید.",
      num: 5,
    },
    {
      text: "در صورت توافق نهایی دو طرف, پروژه برای شما فعال می شود.",
      num: 6,
    },
  ];
  return (
    <Grid container direction="column">
      <Grid container item xs={12} direction="row" style={{ margin: "2rem" }}>
        <Grid item xs={5}>
          {" "}
          <img
            style={{ padding: "4rem" }}
            src={freelancertab1}
            alt="freelancertab1-img"
            className={classes.img}
          />
        </Grid>
        <Grid item xs={12} md={7} id={classes.freelancerh2}>
          <h2 style={{ paddingBottom: "1rem" }}>نحوه تکمیل پروفایل کاربری</h2>
          {text1.map((item) => (
            <div
              className={classes.Divroot}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  padding: "0 .5rem",
                  paddingTop: ".15rem",
                  marginBottom: " 1rem",
                  borderRadius: "50%",
                  background: "#FFCB05",
                }}
              >
                {item.num}
              </span>
              <span
                style={{
                  padding: ".25rem",
                  marginBottom: "2rem",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
          <p id={classes.span}>
            این اطلاعات می تواند به کارفرماها در تصمیم گیری بهتر برای استخدام
            شما , کمک کند. و همچنین شما نیز به این وسیله فرصت های شغلی بیشتری را
            به دست می آورید.
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        direction="row-reverse"
        style={{ margin: "3rem" }}
      >
        <Grid item xs={5}>
          {" "}
          <img
            style={{ padding: "4rem" }}
            src={freelancertab2}
            alt="freelancertab2-img"
            className={classes.img2}
          />
        </Grid>
        <Grid item xs={12} md={7} id={classes.freelancerh2}>
          <h2 style={{ paddingBottom: "1rem" }}>
            نحوه پیدا کردن پروژه و ثبت پیشنهاد
          </h2>
          {text2.map((item) => (
            <div
              className={classes.Divroot}
              style={{
                display: "flex",

                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  padding: "0 .5rem",
                  paddingTop: ".15rem",
                  marginBottom: " 1rem",
                  borderRadius: "50%",
                  background: "#FFCB05",
                }}
              >
                {item.num}
              </span>
              <span
                style={{
                  padding: ".25rem",
                  marginBottom: "2rem",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
          <p id={classes.span}>
            پس از انجام پروژه و کسب رضایت کارفرما, مبلغ توافقی شما که در حساب
            پارک جاب قرار دارد به حساب شما واریز می شود.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FreelancerTab;
