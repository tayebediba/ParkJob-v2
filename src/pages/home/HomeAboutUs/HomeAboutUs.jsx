import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import classes from "./homeAboutUs.module.css";
import Layout from "../../../Layout/Layout";
import abuotus from "../../../assets/img/home/aboutUs.png";
const HomeAboutUs = () => {
  return (
    <Layout>
      <Paper elevation={3} className={classes.urlPage}>
        پارک جاب/ درباره ما
      </Paper>
      <Grid container justifyContent="center">
        <Grid item md={6} xs={12} style={{ textAlign: "center", marginTop: "2rem" }}>
          <img className={classes.imgAbuot} src={abuotus} alt="abuotus-img" />
        </Grid>
        <Grid
          item
          md={3}
          xs={12}
          direction="column"
          justifyContent="flex-end"
          style={{ display: "flex", textAlign: "center" }}
        >
          <h1>درباره پارک جاب</h1>
          <h6>درباره ما و تیم ما چی میدونی؟</h6>
        </Grid>
      </Grid>
      <Grid container className={classes.para}>
        <Typography>
          ما یک بازار کار آنلاین نیستیم. درواقع ما یک کارخانه آنلاین هستیم که با
          فراهم کردن ابزار مناسب برای انسانهای باانگیزه کمک میکنیم تا جهان به
          مکان بهتری برای زندگی تبدیل شود.ما باور داریم کارآفرینان ,
          فریلنسرها/کارمندان موفق می توانند دنیای بهتری را برای همه خلق کنند.
        </Typography>
        <Typography>
          هدف ما جهانی شدن است برای رسیدن به این هدف گام برمیداریم و تلاش
          میکنیم.پارک جاب یک پلتفرم نیست, پارک جاب یک سبک زندگی است. سبک زندگی
          برای فریلنسرها , کارآفرینان و کارمندان. ما برای همه امکاناتی را فراهم
          می آوریم تا بتوانند با اطمینان و بدون حضور فیزیکی با یکدیگر کار کنند,
          پروژها را انجام دهند, محصولات جدید خلق کنند و یا کیفیت محصولات فعلی را
          بهبود بخشند.ما کمک میکنیم بهره وری افزایش یابد و ساعات مفید کاری بیشتر
          شود.
        </Typography>
        <Typography>
          ما کمک می کنیم از وقت خود بهتر استفاده کنید و درآمد بیشتری کسب کنید.
          همینطور با کم کردن رفت و آمدهای غیر ضروری، به بهبود محیط زیست کمک می
          کنیم. در این چند سال توانستیم به رونق و اشتغال فریلنسرها و کارآفرینان
          در شهرهای کوچک تر نیز کمک کنیم، تا جایی که توانستیم تا حدودی جلوی
          مهاجرت های غیر ضروری نیروهای متخصص به شهرهای بزرگ را بگیریم.
        </Typography>
        <Typography>
          {" "}
          باید اعلام کنیم که ما همه این اتفاقات خوب را مدیون اعتماد و پیگیری
          کاربرانمان هستیم، کاربرانی که از پارک جاب استفاده می کنند، کاربرانی که
          هر روز پیشنهادها و نظرات خود را برای بهتر شدن این پلتفرم برایمان ارسال
          می کنند، و کاربرانی که ما را از خود می دانند و با ما همراه هستند. اگر
          افرادی را می شناسید که به خدمات پارک جاب نیاز دارند، همین امروز آنها
          را به پارک جاب دعوت کنید.
        </Typography>
      </Grid>
    </Layout>
  );
};
export default HomeAboutUs;
