import React from "react";
import { InputLabel, Select, TextField } from "@material-ui/core";
import classes from "./bills.module.css";

const Budget = ({ formik }) => {
  return (
    <div className={classes.Container}>
      <h3 className={classes.Title}>
        مبلغ پیشنهادی جهت انجام پروژه را مشخص نمایید
      </h3>
      <div className={`${classes.Box} ${classes.budget} `}>
        <div className={`${classes.inputBox} ${classes.selectBudgetBox}`}>
          <InputLabel>مبلغ پیشنهادی پونیشا</InputLabel>
          <Select
            name="poonishaProposal"
            value={formik.values.poonishaProposal}
            onChange={formik.handleChange}
            variant="outlined"
            native
            fullWidth
          >
            <option value="">انتخاب کنید</option>
            <option value={1}>{Number(10000000).toLocaleString()} ریال</option>
            <option value={2}>{Number(50000000).toLocaleString()} ریال</option>
            <option value={3}>{Number(100000000).toLocaleString()} ریال</option>
            <option value={3}>{Number(150000000).toLocaleString()} ریال</option>
          </Select>
        </div>
        <div className={`${classes.inputBox} ${classes.minInput}`}>
          <InputLabel>حداقل بودجه (ریال)</InputLabel>
          <TextField
            type="text"
            name="minBudget"
            value={formik.values.minBudget}
            onChange={formik.handleChange}
            required
            fullWidth
            variant="outlined"
            placeholder={Number(10000000).toLocaleString()}
            ریال
          />
        </div>
        <div className={`${classes.inputBox} ${classes.maxInput}`}>
          <InputLabel>حداکثر بودجه (ریال)</InputLabel>
          <TextField
            type="text"
            name="maxBudget"
            value={formik.values.maxBudget}
            onChange={formik.handleChange}
            required
            fullWidth
            variant="outlined"
            placeholder={Number(150000000).toLocaleString()}
          />
        </div>
      </div>
    </div>
  );
};

export default Budget;
