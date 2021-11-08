import {
  Button,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import classes from "./bills.module.css";
import { Link } from "react-router-dom";
import { Check } from "@material-ui/icons";
import Category from "./Category";
import ProjectInfo from "./ProjectInfo";
import UploadFiles from "./UploadFiles";
import Budget from "./Budget";
import PaymentPlan from "./PaymentPlan";
import CompletionPayment from "./CompletionPayment";
import { scrollHandler } from "../../../helper/general";


const Bills = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  useEffect(() => {
    scrollHandler(0, 0);
  }, []);
  const steps = [
    { type: "انتخاب دسته بندی" },
    { type: "تکمیل اطلاعات پروژه" },
    { type: "بارگذاری تصاویر ضمیمه" },
    { type: "تعیین بودجه پروژه" },
    { type: "انتخاب پلن پرداخت" },
    { type: "کد تخفیف و پرداخت" },
  ];

  const next = "ادامه";
  const accept = "ثبت درخواست";

  const handleNext = () => {
    if (formik.isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const initialValues = {
    skills: "",
    projectType: "",
    projectTitle: "",
    description: "",
    fileUpdate: "",
    poonishaProposal: "",
    minBudget: "",
    maxBudget: "",
    offCode: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Category formik={formik} />;
      case 1:
        return <ProjectInfo formik={formik} />;
      case 2:
        return <UploadFiles formik={formik} />;
      case 3:
        return <Budget formik={formik} />;
      case 4:
        return <PaymentPlan formik={formik} />;
      case 5:
        return <CompletionPayment formik={formik} />;

      default:
        return "Unknown ";
    }
  }

  return (
    <Grid container>
      <h3 style={{ paddingBottom: "2rem", margin: "0" }}>ایجاد پروژه</h3>
     
      <Paper className={classes.paper}>
        <Stepper
          id={classes.stepper}
          activeStep={activeStep}
          alternativeLabel
          className={classes.stepper}
          color="secondary"
        >
          {steps.map((label, index) => (
            <Step key={index * 1123} className={classes.step}>
              <StepLabel id={classes.StepLabel} className={classes.stepLabel}>
                {label.type}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <form onSubmit={formik.handleSubmit} className={classes.main}>
          {activeStep !== steps.length ? (
            <>
              <div className={classes.container}>
                {getStepContent(activeStep)}

                <div className={classes.stepBtnBox}>
                  <Button
                    disabled={activeStep === 0}
                    variant="outlined"
                    onClick={handleBack}
                    className={classes.backBtn}
                  >
                    بازگشت
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <Button
                      className={classes.forwardBtn}
                      variant="contained"
                      color="secondary"
                      type="submit"
                    >
                      <div>{accept}</div>
                    </Button>
                  ) : (
                    <Button
                      className={classes.forwardBtn}
                      variant="contained"
                      color="secondary"
                      onClick={handleNext}
                    >
                      <div>{next}</div>
                    </Button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className={classes.main}>
              <div className={classes.container}>
                <div className={classes.successfulContainer}>
                  <Check fontSize="large" className={classes.successfulIcon} />
                  <Typography variant="h6" className={classes.successfulTitle}>
                    درخواست شما با موفقیت ثبت شد و در لیست در خواست ها نمایش
                    داده می شود
                  </Typography>
                  <Link to="/dashboard" className={classes.link}>
                    <Button
                      className={classes.successfulBtn}
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      مشاهده لیست درخواست های شما
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </form>
      </Paper>
    </Grid>
  );
};

export default Bills;
