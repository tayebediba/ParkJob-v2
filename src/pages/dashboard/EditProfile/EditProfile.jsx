import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Select,
  Button,
  FormControl,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./EditProfile.css";
import Avatar from "../../../assets/img/avatar.jpg";
import { Link } from "react-router-dom";

function EditProfile() {
  return (
    <Grid container item xs={12} direction="column">
      <Paper
        className="cardMessages"
        style={{ height: "38rem", borderRadius: "1rem" }}
      >
        <div className="EditProfileTitle">
          <Grid
            container
            item
            xs={12}
            justify="space-between"
            direction="row"
            className="cardTitle"
          >
            <div>
              <AccountCircleIcon />
              <p>اطلاعات فردی</p>
            </div>
            <Link to="/dashboard/profile">
              <div style={{ cursor: "pointer" }}>
                <Typography className="color-blue">بازگشت</Typography>
              </div>
            </Link>
          </Grid>
        </div>
        <Grid
          container
          item
          xs={12}
          justify="flex-start"
          direction="row"
          className="avatar"
        >
          <Grid container item xs={5} justify="flex-end" direction="row">
            <img src={Avatar} alt="" />
          </Grid>
          <Grid container item xs={6} justify="flex-start" direction="row">
            <div className="upload">
              <div style={{ width: "100%" }}>
                <input type="file" id="upload" hidden />
                <label for="upload" className="uploadBtn">
                  بارگذاری تصویر
                </label>
              </div>
              <div style={{ width: "100%", margin: "20px 15px 0 0" }}>
                <span>تصویر مورد نظر را با فرمت jpg بارگذاری نمایید</span>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justify="flex-start"
          direction="row"
          className="avatar"
        >
          <form>
            <Grid container item xs={12} direction="row" justify="center">
              <Grid xs={4}>
                <label>نام و نام خانوادگی</label>
                <TextField
                  id="name"
                  variant="outlined"
                  style={{ width: "15rem", fontFamily: "Dana" }}
                  placeholder="علی محمدی"
                />
              </Grid>
              <Grid xs={4}>
                <label>تاریخ تولد</label>
                <br></br>
                <FormControl variant="outlined">
                  <TextField
                    style={{ width: "15rem" }}
                    id="date"
                    type="date"
                    defaultValue="2017-05-24"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid xs={4}>
                <label>شهر محل سکونت</label>
                <br></br>
                <FormControl variant="outlined">
                  <Select
                    native
                    inputProps={{
                      name: "age",
                      id: "age-native-simple",
                    }}
                    style={{ width: "15rem", fontFamily: "Dana" }}
                  >
                    <option aria-label="None" value="">
                      انتخاب کنید
                    </option>
                    <option value={10}>کرمانشاه</option>
                    <option value={20}>تهران</option>
                    <option value={30}>اصفهان</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={4} style={{ marginTop: 20 }}>
                <label>شماره همراه</label>
                <TextField
                  id="name"
                  variant="outlined"
                  style={{ width: "15rem" }}
                  placeholder="09185624908"
                />
              </Grid>
              <Grid xs={8} style={{ marginTop: 20 }}>
                <label>ایمیل</label>
                <br></br>
                <TextField
                  id="email"
                  variant="outlined"
                  style={{ width: "32.3rem" }}
                  placeholder="info@gmail.com"
                />
              </Grid>
              <Grid xs={12} style={{ marginTop: 20 }}>
                <label>درباره من</label>
                <br></br>
                <TextField
                  placeholder="توصیحی درباره خود بنویسید ..."
                  style={{ width: "49.5rem", fontFamily: "Dana" }}
                  id="outlined-multiline-static"
                  multiline
                  minRows={4}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid xs={12} container item direction="row" justify="flex-end">
              <div>
                <Button
                  variant="contained"
                  style={{
                    margin: "35px 15px",
                    padding: "6px 20px",
                    fontFamily: "Dana",
                    fontSize: 18,
                  }}
                >
                  انصراف
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    padding: "6px 20px",
                    fontFamily: "Dana",
                    fontSize: 16,
                  }}
                >
                  ذخیره
                </Button>
              </div>
            </Grid>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default EditProfile;
