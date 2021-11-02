import { Checkbox, Chip } from "@material-ui/core";
import React from "react";
import classes from "./bills.module.css";

const PaymentPlan = ({ formik }) => {
  return (
    <div className={classes.Container}>
      <h3 className={classes.Title}>
          می توانید برای مشاهده بهترین نتیجه نوع نمایش پروژه خود را انتخاب نمایید
      </h3>
      <div className={`${classes.Box} ${classes.paymentPlanBox} `}>
        <div className={`${classes.inputBox} ${classes.planBox}`}>
          <h3>ایجاد پروژه</h3>
          <div>
            پروژه شما برار هزاران فریلنسر که مهارت لازم را دارند ار طریق ایمیل
            ارسال می شود
          </div>
          <h3>{Number(1000000).toLocaleString()} ریال </h3>
        </div>
        <div className={`${classes.inputBox} ${classes.planBox}`}>
          <h3>
            <Checkbox />
            برجسته و فوری{" "}
            <Chip className={classes.paymentChips} label="تخفیف 30%" />{" "}
          </h3>
          <div>
            پروژه شما برار هزاران فریلنسر که مهارت لازم را دارد ایمیل میشود
          </div>
          <h3>
            <span className={classes.off}>
              {Number(1300000).toLocaleString()}
            </span>
            {Number(1000000).toLocaleString()} ریال
          </h3>
        </div>
        <div className={`${classes.inputBox} ${classes.planBox}`}>
          <h3>
            <Checkbox />
            برجسته و فوری{" "}
            <Chip className={classes.paymentChips} label="تخفیف 30%" />{" "}
          </h3>
          <div>
            پروژه شما برار هزاران فریلنسر که مهارت لازم را دارد ایمیل میشود
          </div>
          <h3>{Number(1000000).toLocaleString()} ریال </h3>
        </div>
        <div className={`${classes.inputBox} ${classes.planBox}`}>
          <h3>
            <Checkbox />
            برجسته و فوری{" "}
            <Chip className={classes.paymentChips} label="تخفیف 30%" />{" "}
          </h3>
          <div>
            پروژه شما برار هزاران فریلنسر که مهارت لازم را دارد ایمیل میشود
          </div>
          <h3>{Number(1000000).toLocaleString()} ریال </h3>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
