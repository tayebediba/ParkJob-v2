import { Button, ButtonGroup, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import classes from "./questionsLayout.module.css";
import freelancer from "../../../assets/img/home/freelancer.svg";
import Layout from "../../../Layout/Layout";
import FreelancerTab from "./FreelancerTab/FreelancerTab";
import EmployerTab from "./EmployerTab/EmployerTab";
import QuestionsTab from "./QuestionsTab/QuestionsTab";
import { scrollHandler } from "../../../helper/general";

const QuestionsLayout = () => {
  const [renderTab, setRenderTab] = useState("freelancer");
  const changeTabs = (tab) => {
    setRenderTab(tab);
  };
  useEffect(() => {
    scrollHandler(0, 0);
  }, []);

  let tab = null;
  switch (renderTab) {
    case "freelancer":
      tab = <FreelancerTab />;
      break;
    case "employer":
      tab = <EmployerTab />;
      break;
    case "q&a":
      tab = <QuestionsTab />;
      break;

    default:
      tab = <FreelancerTab />;

      break;
  }
  return (
    <Layout>
      <Paper elevation={3} className={classes.urlPage}>
        پارک جاب/ سوالات متداول
      </Paper>
      <Grid container className={classes.fixLayer}>
        <Grid item md={5} xs={12} className={classes.fixLayerHeader}>
          <h2 style={{ marginBottom: "3rem" }}>
            درباره نحوه ی کار ما سوال دارید؟
          </h2>
          <p>
            {" "}
            در این بخش ما نحوه کار سایت , ثبت پروژه , تکمیل پروفایل را برای
            فریلنسرها و کارفرماهای عزیز توضیح می دهیم.همچنین به برخی سوالات که
            ممکن است برای شما عزیزان پیش بیاید ,پاسخ می دهیم.
          </p>
        </Grid>
        <Grid item md={6} xs={12}>
          <img src={freelancer} alt="freelancer-img" />
        </Grid>
      </Grid>
      <Grid container direction="column">
        <ButtonGroup
          className={classes.GroupBtn}
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button
            className={`${classes.freelancerBtn} ${
              renderTab === "freelancer" ? classes.activeTab : null
            }`}
            onClick={() => {
              changeTabs("freelancer");
            }}
          >
            فریلنسر
          </Button>
          <Button
            className={`${classes.employerBtn} ${
              renderTab === "employer" ? classes.activeTab : null
            }`}
            onClick={() => {
              changeTabs("employer");
            }}
          >
            کارفرما
          </Button>
          <Button
            className={`${classes.qaBtn} ${
              renderTab === "q&a" ? classes.activeTab : null
            }`}
            onClick={() => {
              changeTabs("q&a");
            }}
          >
            سوالات متداول
          </Button>
        </ButtonGroup>
        <div>{tab}</div>
      </Grid>
    </Layout>
  );
};

export default QuestionsLayout;
