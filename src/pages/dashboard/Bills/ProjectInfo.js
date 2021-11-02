import { Button, Chip, InputLabel, TextField } from "@material-ui/core";
import { CheckCircleRounded } from "@material-ui/icons";
import { useState } from "react";
import classes from "./bills.module.css";

const ProjectInfo = ({ formik }) => {
  const data = [
    { type: "Branding1", active: false },
    { type: "Adobe Photoshop1", active: false },
    { type: "Branding2", active: false },
    { type: "Adobe Photoshop2", active: false },
    { type: "Branding3", active: false },
    { type: "Adobe Photoshop3", active: false },
    { type: "Branding4", active: false },
    { type: "Adobe Photoshop4", active: false },
    { type: "Branding5", active: false },
    { type: "Adobe Photoshop5", active: false },
    { type: "Branding6", active: false },
    { type: "Adobe Photoshop6", active: false },
    { type: "Branding7", active: false },
    { type: "Adobe Photoshop7", active: false },
    { type: "Branding8", active: false },
    { type: "Adobe Photoshop8", active: false },
    { type: "Branding9", active: false },
    { type: "Adobe Photoshop9", active: false },
    { type: "Branding10", active: false },
    { type: "Adobe Photoshop10", active: false },
    { type: "Branding11", active: false },
    { type: "Adobe Photoshop11", active: false },
  ];
  const row = Math.round(data.length / 3);
  const [dataInfo, setDataInfo] = useState(data);

  const selectedChip = (selectedItem, selectedIndex) => {
    setDataInfo((prevState) => {
      const selected = { type: selectedItem.type, active: true };
      const updateData = prevState.fill(
        selected,
        selectedIndex,
        selectedIndex + 1
      );

      return [...updateData];
    });
  };

  const resetSelected = () => {
    setDataInfo(data);
  };

  return (
    <div className={classes.Container}>
      <h3 className={classes.Title}>
        لطفا جزئیات مربوط به پروژه مورد نظر را تکمیل کنید
      </h3>
      <div className={`${classes.Box} ${classes.projectInfo} `}>
        <div className={classes.inputField}>
          <div className={classes.inputBox} style={{ marginBottom: "1rem" }}>
            <InputLabel>عنوان پروژه</InputLabel>
            <TextField
              type="text"
              name="projectTitle"
              value={formik.values.projectTitle}
              onChange={formik.handleChange}
              required
              fullWidth
              variant="outlined"
              placeholder="طراحی لوگو شخصی"
            />
          </div>
          <div className={classes.inputBox}>
            <InputLabel> توضیحات </InputLabel>
            <TextField
              type="text"
              multiline
              rows={12}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              required
              fullWidth
              variant="outlined"
              placeholder="توضیحات مربوط به پروژه خود را بنویسید"
            />
          </div>
        </div>
        <div className={classes.selectField}>
          <div className={classes.inputBox}>
            <InputLabel> مهارتهای مورد نیاز را انتخاب کنید</InputLabel>
            <div className={classes.selectedSkills}> 18 / 8 انتخاب شده </div>
          </div>
          <div
            className={`${classes.inputBox} ${classes.selectedBox}`}
            style={{ gridTemplateRows: `repeat(${row}, 3rem)` }}
          >
            {dataInfo.map((item, index) => (
              <Chip
                className={
                  item.active
                    ? `${classes.chip} ${classes.chipSelected}`
                    : classes.chip
                }
                key={index}
                label={item.type}
                icon={
                  item.active ? <CheckCircleRounded color="primary" /> : null
                }
                variant="outlined"
                onClick={() => selectedChip(item, index)}
              />
            ))}
          </div>
          <Button
            variant="contained"
            style={{
              marginTop: "1rem",
              backgroundColor: "#ee8e92",
              color: "#fff",
              fontWeight: "500",
            }}
            onClick={resetSelected}
          >
            پاک کردن انتخاب ها
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
