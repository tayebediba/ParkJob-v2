import React, { useEffect } from "react";
import classes from "./freelancers.module.css";
import Layout from "../../../Layout/Layout";
import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { Autocomplete, Pagination } from "@material-ui/lab";
import FreelancersCard from "./FreelancersCard";
import { scrollHandler } from "../../../helper/general";

const Freelancers = () => {
  const city = [
    { title: "کرمانشاه" },
    { title: "تهران" },
    { title: "اراک" },
    { title: "یزد" },
    { title: "کرمان" },
    { title: "اردبیل" },
    { title: "رشت" },
    { title: "گیلان" },
    { title: "مشهد" },
  ];
  const TypeofActivity = [
    { title: "طراحی لوگو" },
    { title: "ایلاستریتور" },
    { title: "عکاسی" },
    { title: "طراحی پوستر" },
    { title: "فتوشاپ" },
    { title: "طراحی تراکت" },
    { title: "انیمیشن" },
    { title: "طراحی تابلو" },
    { title: "برندینگ" },
    { title: "طراحی کارکتر" },
  ];
  const skills = [
    { title: "طراحی و گرافیک" },
    { title: "تولید محتوا" },
    { title: "ترجمه و تایپ" },
    { title: "دیجیتال مارکتینگ سئو" },
    { title: "عکس ,انیمیشن و ویدئو" },
    { title: "طراحی سایت" },
    { title: "برنامه نویسی , نرم افزار" },
    { title: "سایر کسب و کارها" },
  ];
  useEffect(() => {
    scrollHandler(0, 0);
  }, []);
  return (
    <Layout>
      <Paper elevation={3} className={classes.urlPage}>
        پارک جاب/ فریلنسرها
      </Paper>
      <Grid container className={classes.formBox}>
        <Grid item xs={12} className={classes.form}>
          <form
            className="form-prici"
            noValidate
            autoComplete="off"
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "2rem",
            }}
          >
            <div style={{ width: "20%" }}>
              <Autocomplete
                id="combo-box-demo"
                options={skills}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="دسته بندی مهارت ها"
                    variant="outlined"
                    style={{
                      backgroundColor: "#fff",
                      width: "100%",
                    }}
                  />
                )}
              />
            </div>
            <div style={{ width: "20%" }}>
              {" "}
              <Autocomplete
                id="combo-box-demo"
                options={TypeofActivity}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="نوع فعالیت"
                    placeholder="انتخاب کنید"
                    variant="outlined"
                    style={{
                      backgroundColor: "#fff",
                      width: "100%",
                    }}
                  />
                )}
              />
            </div>
            <div style={{ width: "20%" }}>
              {" "}
              <Autocomplete
                id="combo-box-demo"
                options={city}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="شهر"
                    placeholder="انتخاب کنید"
                    variant="outlined"
                    style={{
                      backgroundColor: "#fff",
                      width: "100%",
                    }}
                  />
                )}
              />
            </div>
            <Button variant="contained" color="primary">
              اعمال فیلترها
            </Button>
          </form>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify="center"
        style={{
          display: "flex",

          alignItems: "center",
          margin: "1rem auto",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <Grid style={{ padding: "0 2rem" }} item md={4} xs={12} key={item}>
            <FreelancersCard />
          </Grid>
        ))}
      </Grid>
      <div className={classes.Pagination}>
        {" "}
        <Pagination count={10} color="primary" />
      </div>
    </Layout>
  );
};
export default Freelancers;
