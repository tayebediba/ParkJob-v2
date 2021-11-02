import { Grid } from "@material-ui/core";
import React from "react";
import classes from "./employerTab.module.css";
import employerTab1 from "../../../../assets/img/home/employertab1.png";
import employerTab2 from "../../../../assets/img/home/employertab2.png";
const EmployerTab = () => {
  const text1 = [
    {
      text: "پس از ورود به حساب کاربری خود از منوی سمت راست در قسمت ویرایش پروفایل می توانید اطلاعات خود را وارد کنید.",
      num: 1,
    },
    {
      text: "در مرحله اول دسته بندی پروژه و نوع آن را انتخاب کنید.",
      num: 2,
    },
    {
      text: "در مرحله دوم از یک عنوان واضح برای تعریف پروژه استفاده کنید, همچنین توضیحات و فایل های ضمیمه را نیز اضافه کنید.",
      num: 3,
    },
    {
      text: "مرحله سوم مربوط به فایل های ضمیمه پروژه شماست , در صورت نیاز به اطلاعات بیشتر میتوانید فایل نیز اضافه کنید.",
      num: 4,
    },
    {
      text: "مرحله چهارم بخش مالی پروژه را مشخص میکند.در این قسمت شما بودجه مورد نظر خود را وارد میکنید.",
      num: 5,
    },
    {
      text: "در مرحله پنجم شما نوع پروژه خود را بنا بر نیاز انتخاب میکنید.",
      num: 6,
    },
    {
      text: "و در آخر پس از شارژ کیف پول خود , مبلغ پروژه از حساب شما کسر شده و پروژه شما در لیست پروژه ها نمایش داده می شود.",
      num: 7,
    },
  ];
  const text2 = [
    {
      text: "در پنل کاربری خود می توانید به بخش مدیریت پروژه های خود بروید.",
      num: 1,
    },
    {
      text: "در این قسمت و در صفحه پیشنهادهای فعال , پس از انتخاب پروژه پیشنهادهای مربوط به آن را مشاهده می کنید.",
      num: 2,
    },
    {
      text: "پس از مطالعه دقیق پیشنهادها و رزومه فریلنسرها , پیشنهاد مورد نظر خود را انتخاب می کنید.",
      num: 3,
    },
    {
      text: "بعد از آن می توانید در قسمت پیام ها با فریلنسر منتخب خود مذاکره کنید.",
      num: 4,
    },
    {
      text: "در صورت توافق دو طرف بر سر قیمت و زمان انجام و سایر مسائل مورد نظر , فریلنسر برای انجام پروژه شما استخدام می شود.",
      num: 5,
    },
  ];
  return (
    <Grid container direction="column">
      <Grid container item xs={12} direction="row" style={{ margin: "2rem" }}>
        <Grid item xs={5}>
          {" "}
          <img
            className={classes.img}
            style={{ padding: "4rem" }}
            src={employerTab1}
            alt="employerTab1-img"
          />
        </Grid>
        <Grid item xs={12} md={7} id={classes.employerh2}>
          <h2 style={{ paddingBottom: "1rem" }}>نحوه ثبت پروژه در پارک جاب</h2>
          {text1.map((item) => (
            <div
              className={classes.DivrootEmployer}
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
            className={classes.img2}
            style={{ padding: "4rem" }}
            src={employerTab2}
            alt="employerTab2-img"
          />
        </Grid>
        <Grid item xs={12} md={7} id={classes.employerh2}>
          <h2 style={{ paddingBottom: "1rem" }}>
            نحوه انتخاب و استخدام فریلنسر مناسب
          </h2>
          {text2.map((item) => (
            <div
              className={classes.DivrootEmployer}
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
            {" "}
            در تمام مدت کار, می توانید از طریق قسمت پیام های پنل کاربری خود با
            فریلنسرها در ارتباط بوده و از روند پیشرفت پروژه مطلع باشید.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmployerTab;
