import React from "react";
import { InputLabel, Select } from "@material-ui/core";
import classes from "./bills.module.css";

const Category = ({ formik }) => {
  return (
    <div className={classes.Container}>
      <h3 className={classes.Title}>
        لطفا دسته بندی و نوع پروژه مورد نظر خود را مشخص کنید
      </h3>
      <div className={`${classes.Box} ${classes.categoryBox} `}>
        <div className={classes.selectBox}>
          <InputLabel>دسته بندی مهارت ها</InputLabel>
          <Select
            className={classes.selectCategory}
            name="skills"
            value={formik.values.skills}
            onChange={formik.handleChange}
            variant="outlined"
            native
          >
            <option value="">انتخاب کنید</option>
            <option value={1}>دلق ساز</option>
            <option value={2}>دلق گیر</option>
          </Select>
        </div>

        <div className={classes.selectBox}>
          <InputLabel>نوع پروژه</InputLabel>
          <Select
            className={classes.selectCategory}
            name="projectType"
            value={formik.values.projectType}
            onChange={formik.handleChange}
            variant="outlined"
            native
          >
            <option value="">انتخاب کنید</option>
            <option value={1}>دلق معمولی</option>
            <option value={2}>دلق کلاسیک</option>
            <option value={2}>دلق ویژه</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Category;
