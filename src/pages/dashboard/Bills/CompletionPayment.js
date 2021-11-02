import React from "react";
import { Button, InputLabel, Select, TextField } from "@material-ui/core";
import classes from "./bills.module.css";

const CompletionPayment = ({ formik }) => {
  return (
    <div className={classes.Container}>
      <h3 className={classes.Title}>
        موجودی حساب شما {Number(1000000).toLocaleString()} ریال کمتر از مبلغ
        ایجاد پروژه می باشد , پس از واریز پروژه ایجاد خواهد شد
      </h3>
      <div className={`${classes.Box} ${classes.projectInfo} `}>
        <div className={`${classes.selectField} ${classes.offBox} `}>
          <div className={classes.inputBox}>
            <InputLabel>کد تخفیف</InputLabel>
            <div className={classes.offInputBox}>
              <TextField
                className={classes.offInput}
                type="text"
                name="offCode"
                value={formik.values.offCode}
                onChange={formik.handleChange}
                fullWidth
                required
                variant="outlined"
                placeholder="کد تخفیف"
              />
              <Button
                className={classes.offBtn}
                color="secondary"
                variant="contained"
              >
                اعمال تخفیف
              </Button>
            </div>
          </div>
          <div className={classes.inputBox}>
            <InputLabel> درگاه پرداخت </InputLabel>
            <Select
              name="skills"
              value={formik.values.skills}
              onChange={formik.handleChange}
              variant="outlined"
              native
              fullWidth
            >
              <option value="">انتخاب کنید</option>
              <option value={1}>دلق پرداز تجارت</option>
              <option value={2}>دلق پرداز ملت</option>
            </Select>
          </div>
        </div>
        <div className={classes.selectField}>
          <div className={classes.reportPayment}>
            <h3>گزارش پرداخت</h3>
            <div>
              <span>ایجاد پروژه</span>
              <span>{Number(1000000).toLocaleString()} ریال</span>
            </div>
            <div>
              <span>پلن برجسته و فوری</span>
              <span>{Number(1000000).toLocaleString()} ریال</span>
            </div>
            <div>
              <span>پلن تمام وقت</span>
              <span>{Number(1000000).toLocaleString()} ریال</span>
            </div>
            <h3>
              <span>جمع کل</span>
              <span>{Number(3000000).toLocaleString()} ریال</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletionPayment;
