import { Box, Chip, Grid, Slider, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import ChipsArray from "./ChipsArray";
import "./fitsSkill.css";

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
  return (
    <Grid container className="formBox">
      <form
        noValidate
        autoComplete="off"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2rem",
        }}
      >
        <Grid item md={6} xs={12}>
          <div>
            <label>مهارت های شما</label>
            <ChipsArray />
          </div>
          <div>
            <Autocomplete
              id="combo-box-demo"
              options={city}
              getOptionLabel={(option) => option.title}
              style={{ width: 500, marginTop: "2rem" }}
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
          </div>
          <div  style={{ width: 500, marginTop: "2rem" }}>
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
      </form>
    </Grid>
  );
};
export default FitsSkill;
