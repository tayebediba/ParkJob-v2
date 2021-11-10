import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Grid,
  Paper,
  Slider,
  TextField,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useEffect } from "react";
import ProjectDetailsCard from "../../../components/ProjectDetailsCard/ProjectDetailsCard";
import { scrollHandler } from "../../../helper/general";
import ChipsArray from "./ChipsArray";
import "./fitsSkill.css";
import MoreSkills from "./MoreSkills";

function valuetext(value) {
  return `${value}°C`;
}
const FitsSkill = () => {
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
  useEffect(() => {
    scrollHandler(0, 0);
  }, []);
  return (
    <Grid container className="formBox">
      <form
        noValidate
        autoComplete="off"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "2rem",
        }}
      >
        <Grid container>
          <Grid item md={6} xs={12}>
            <div>
              <label>مهارت های شما</label>
              <ChipsArray />
            </div>
            <Grid container>
              <Grid item md={6} xs={12}>
                <Autocomplete
                  id="combo-box-demo"
                  options={city}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 250, marginTop: "2rem" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="شهر"
                      placeholder="انتخاب کنید"
                      variant="outlined"
                      style={{
                        backgroundColor: "#fff",
                        width: "100%",
                        margintop: "3rem",
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item md={6} xs={12} style={{ marginTop: "2rem" }}>
                <label>نوع جستوجو</label>
                <ButtonGroup
                  color="primary"
                  aria-label="contained  primary button group"
                >
                  <Button>همه</Button>
                  <Button>پروژه</Button>
                  <Button>مسابقه</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <div>
              <MoreSkills />
            </div>
            <div style={{ width: "100%", marginTop: "2rem", padding: "1rem" }}>
              <label>قیمت</label>
              <Box sx={{ width: "100%", marginTop: "1.5rem" }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  marks={marks}
                />
              </Box>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Typography variant="inherit" color="textSecondary">
              50 پروژه پیدا شد
            </Typography>
            <Typography
              variant="button"
              color="primary"
              style={{ fontWeight: "bold" }}
            >
              پاک کردن فیلترها
            </Typography>
          </Grid>
          <Grid item md={6} xs={12} style={{ textAlign: "left" }}>
            <Button className="btnFits" variant="contained">
              اعمال فیلترها
            </Button>
          </Grid>
        </Grid>
      </form>

      <Paper>
        <Grid container>
          {" "}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <Grid style={{ padding: "0 1rem" }} item md={4} xs={12} key={item}>
              <ProjectDetailsCard />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Grid>
  );
};
export default FitsSkill;
