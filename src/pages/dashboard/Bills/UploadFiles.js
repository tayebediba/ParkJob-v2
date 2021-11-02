import { Button, InputLabel } from "@material-ui/core";
import { AddCircleRounded, ImageOutlined } from "@material-ui/icons";
import React from "react";
import classes from "./bills.module.css";

const UploadFiles = ({ formik }) => {
  return (
    <div className={classes.Container}>
      <h3 className={classes.Title}>
        اگر فایل یا تصویری دارید که به وضوح پروژه شما کمک میکند بارگذاری کنید
      </h3>
      <div className={classes.Box}>
        <div className={classes.inputField}>
          <div className={classes.inputBox}>
            <InputLabel> بارگذاری فایل ها</InputLabel>
            <Button className={classes.uploadButton} component="label">
              <AddCircleRounded
                fontSize="large"
                style={{
                  fill: "#ee8e92",
                  color: "#fff",
                  height: "3rem",
                  width: "3rem",
                }}
              />
              <input
                type="file"
                name="fileUpdate"
                value={formik.values.fileUpdate}
                onChange={formik.fileUpdate}
                placeholder="test"
                hidden
              />
              <p>انتخاب فایل جدید</p>
            </Button>
          </div>
        </div>
        <div className={classes.selectField}>
          <div className={classes.inputBox}>
            <InputLabel> پیش نمایش فایل</InputLabel>
            <div className={classes.imagePreviewBox}>
              <ImageOutlined className={classes.imagePreviewIcon} />
              <span>حداکثر حجم فایلهای انتخابی 2 مگابایت است</span>
              <span>تصاویر را با فرمت jpg بارگذاری کنید</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFiles;
