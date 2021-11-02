import React from "react";
import classes from "./projectsList.module.css";
import Layout from "../../../Layout/Layout";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Slider,
  TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import CheckboxesTags from "./CheckboxesTags";
import AdvertisementBaner from "./AdvertisementBaner";

function valuetext(value) {
  return `${value}°C`;
}
const ProjectsList = () => {
  const top100Films = [{ title: "فوری" }, { title: "برجسته" }];
  const marks = [
    {
      value: 0,
      label: "1,000,000",
    },
    {
      value: 100,
      label: "15,000,000",
    },
  ];
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Paper elevation={3} className={classes.urlPage}>
        پارک جاب/ پروژه ها/ طراحی و گرافیک
      </Paper>
      <Grid item xs={12} className={classes.formBoxFilter}>
        <form className={classes.formPrici} noValidate autoComplete="off">
          <div className={classes.search}>
            {" "}
            <TextField
              id="outlined-basic"
              label="جستوجو در عنوان و توضیحات"
              placeholder="یک کلمه بنویسید"
              variant="outlined"
              className={classes.searchBox}
            />
          </div>
          <div style={{ width: "30%" }}>
            {" "}
            <Autocomplete
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="نوع پروژه"
                  variant="outlined"
                  style={{
                    backgroundColor: "#fff",
                    width: "100%",
                  }}
                />
              )}
            />
          </div>
          <div style={{ width: "30%" }}>
            {" "}
            <Autocomplete
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="نمایش بر اساس"
                  variant="outlined"
                  style={{
                    backgroundColor: "#fff",
                    width: "100%",
                  }}
                />
              )}
            />
          </div>
        </form>
        <Grid container style={{ margin: "1rem" }}>
          <Grid item md={3} xs={12}>
            <label>قیمت</label>
            <Box sx={{ width: "80%", marginTop: "1.5rem" }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                marks={marks}
              />
            </Box>
          </Grid>
          <Grid item md={2} xs={12}>
            <label>مهارت های شما</label>
            <FormGroup style={{ marginTop: "1.5rem" }}>
              <FormControlLabel
                control={<Checkbox />}
                label="مهارت های رزومه من"
              />
            </FormGroup>
          </Grid>
          <Grid item md={4} xs={12}>
            <CheckboxesTags />
          </Grid>
          <Grid
            className={classes.btnBox}
            item
            md={3}
            xs={12}
            style={{ display: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <Button variant="contained" color="primary">
              اعمال فیلترها
            </Button>
            <Button
              style={{
                backgroundColor: "#CFCFD1",
                fontWeight: "bold",
                borderStyle: "none",
                marginRight: "1rem",
              }}
              variant="outlined"
            >
              پاک کردن فیلترها
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Paper className={classes.cardBaner} key={item}>
          <AdvertisementBaner />
          {item}
        </Paper>
      ))}
    </Layout>
  );
};
export default ProjectsList;
