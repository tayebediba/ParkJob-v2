import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { EmojiObjects } from "@material-ui/icons";
import ResumeSkills from "../../../components/ResumeSkills/ResumeSkills";
import { Healing, Tv, WorkOutline } from "@material-ui/icons";
import "./Resume.css";
import AutoCompeleteComponent from "../../../components/AutoCompelete/AutoCompeleteComponent";


function Resume() {
  const [mounts] = useState([
    { name: "فروردین" },
    { name: "اردیبهشت" },
    { name: "خرداد" },
    { name: "تیر" },
    { name: "مرداد" },
    { name: "شهریور" },
    { name: "مهر" },
    { name: "آبان" },
    { name: "آذر" },
    { name: "دی" },
    { name: "بهمن" },
    { name: "اسفند" },
  ]);
  const [years] = useState([
    { name: "1400" },
    { name: "1399" },
    { name: "1398" },
    { name: "1397" },
    { name: "1396" },
    { name: "1395" },
    { name: "1394" },
    { name: "1393" },
    { name: "1392" },
    { name: "1391" },
    { name: "1390" },
    { name: "1389" },
    { name: "1388" },
    { name: "1387" },
    { name: "1386" },
    { name: "1385" },
    { name: "1384" },
    { name: "1383" },
    { name: "1382" },
    { name: "1381" },
    { name: "1380" },
    { name: "1379" },
    { name: "1378" },
    { name: "1377" },
    { name: "1376" },
    { name: "1375" },
    { name: "1374" },
    { name: "1373" },
    { name: "1372" },
    { name: "1371" },
    { name: "1370" },
    { name: "1369" },
  ]);
  return (
    <div>
      <h3 style={{ paddingBottom: "2rem", margin: "0" }}>رزومه</h3>
   
      <div style={{ width: "100%", marginTop: 20 }}>
        <Paper
          style={{
            padding: 25,
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div>
            <Grid
              container
              justify="space-between"
              direction="row"
              className="cardTitle"
            >
              <Grid item xs={12}>
                <EmojiObjects />
                <p>مهارت ها</p>
              </Grid>
            </Grid>
          </div>
          <hr style={{ width: "100%" }} />
          <Grid container justify="center">
            <ResumeSkills Icon={<Healing />} title="طراحی و گرافیک" />
            <ResumeSkills Icon={<Tv />} title="وبسایت و نرم افزار" />
            <ResumeSkills Icon={<Healing />} title="طراحی و گرافیک" />
            <ResumeSkills Icon={<Tv />} title="وبسایت و نرم افزار" />
            <ResumeSkills Icon={<Healing />} title="طراحی و گرافیک" />
            <ResumeSkills Icon={<Tv />} title="وبسایت و نرم افزار" />
            <ResumeSkills Icon={<Healing />} title="طراحی و گرافیک" />
            <ResumeSkills Icon={<Tv />} title="وبسایت و نرم افزار" />
          </Grid>
          <Grid container justify="center" style={{ marginTop: "2rem" }}>
            <Grid item xs={12}>
              <AutoCompeleteComponent />
            </Grid>
          </Grid>
          <Grid xs={12} container item direction="row" justify="flex-end">
            <div>
              <Button
                className="divbtnresume"
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
                className="divbtnresume"
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
        </Paper>
      </div>
      <div style={{ width: "100%", marginTop: 20 }}>
        <Paper
          style={{
            padding: 25,
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div>
            <Grid
              container
              justify="space-between"
              direction="row"
              className="cardTitle"
            >
              <Grid item xs={12}>
                <WorkOutline />
                <p>سوابق شغلی</p>
              </Grid>
            </Grid>
          </div>
          <hr style={{ width: "100%" }} />
          <form style={{ width: "100% " }}>
            <Grid container item xs={12} justify="center" spacing={3}>
              <Grid item xs={12} md={6}>
                <lable htmlFor="outlined-basic">نام شرکت</lable>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <lable htmlFor="outlined-basic">سمت ( عنوان شغلی )</lable>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item container xs={12} md={6} spacing={1}>
                <Grid item xs={6}>
                  <lable htmlFor="outlined-basic">از تاریخ</lable>
                  <br />
                  <FormControl variant="outlined" style={{ width: "100%" }}>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                    >
                      {mounts.map((mount) => {
                        return (
                          <MenuItem value={mount.name}>{mount.name}</MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <lable htmlFor="outlined-basic">سال</lable>
                  <FormControl variant="outlined" style={{ width: "100%" }}>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                    >
                      {years.map((year) => {
                        return (
                          <MenuItem value={year.name}>{year.name}</MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item container xs={12} md={6} spacing={1}>
                <Grid item xs={6}>
                  <lable htmlFor="outlined-basic">تا تاریخ</lable>
                  <FormControl variant="outlined" style={{ width: "100%" }}>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {mounts.map((mount) => {
                        return (
                          <MenuItem value={mount.name}>{mount.name}</MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <lable htmlFor="outlined-basic">سال</lable>
                  <FormControl variant="outlined" style={{ width: "100%" }}>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                    >
                      {years.map((year) => {
                        return (
                          <MenuItem value={year.name}>{year.name}</MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <lable htmlFor="outlined-basic">توضیحات</lable>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  multiline
                  rows={4}
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </form>
          <Grid xs={12} container item direction="row" justify="flex-end">
            <div>
              <Button
                className="divbtnresume"
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
                className="divbtnresume"
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
        </Paper>
      </div>
    </div>
  );
}

export default Resume;
