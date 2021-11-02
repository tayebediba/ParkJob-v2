import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Fade,
  FormControlLabel,
  Grid,
  IconButton,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import pic1 from "../../../assets/img/home/avatar1.jpg";
import { Rating } from "@material-ui/lab";
import {
  AccessTime,
  AttachFile,
  AttachMoney,
  Add,
  Close,
} from "@material-ui/icons";
import Layout from "../../../Layout/Layout";
import classes from "./viewProject.module.css";
import { scrollHandler } from "../../../helper/general";

const ViewProject = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  useEffect(() => {
    console.log(window);
    scrollHandler(0, 0);
  }, []);

  return (
    <Layout>
      <Modal
        id={classes.paper}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div id="transition-modal-description">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <h3 id="transition-modal-title">ثبت پیشنهاد</h3>
                <Close
                  id={classes.btnCloseModal}
                  onClick={handleClose}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <Grid container>
                <Grid
                  item
                  container
                  xs={12}
                  style={{
                    background: "#F6F6F6",
                    borderRadius: "1rem",
                    padding: "1rem",
                  }}
                >
                  <Grid xs={12}>
                    <h5 className={classes.h5}>
                      شما می توانید پروژه های خود را به صورت یک یاچند مرحله ای
                      تعریف کنید. میتوانید برای هر مرحله از کار , پیشنهاد
                      درخواست پرداخت امن ایجاد کنید.
                    </h5>
                  </Grid>
                  <Grid xs={12}>
                    <form
                      id={classes.formModal}
                      className="form-prici"
                      noValidate
                      autoComplete="off"
                      style={{ display: "flex" }}
                    >
                      <TextField
                        className={classes.textField}
                        id="outlined-basic"
                        label="عنوان مرحله"
                        variant="outlined"
                        placeholder="عنوان را بنویسید..."
                        style={{
                          width: "50%",
                          margin: "0 1rem",
                          backgroundColor: "#fff",
                        }}
                      />
                      <TextField
                        className={classes.textField}
                        id="outlined-basic"
                        label="تعداد روز پیشنهادی"
                        placeholder="0روز"
                        variant="outlined"
                        style={{
                          width: "50%",
                          margin: "0 1rem",
                          backgroundColor: "#fff",
                        }}
                      />
                      <TextField
                        className={classes.textField}
                        id="outlined-basic"
                        label="قیمت پیشنهادی"
                        placeholder="0تومان"
                        variant="outlined"
                        style={{
                          width: "50%",
                          margin: "0 1rem",
                          backgroundColor: "#fff",
                        }}
                      />
                    </form>
                  </Grid>
                  <Grid xs={12}>
                    <div
                      className={classes.divAddٔewStep}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "1rem 0",
                      }}
                    >
                      <div className={classes.boxBtn}>
                        {" "}
                        <IconButton
                          className={classes.actionsBtn}
                          variant="contained"
                          type="submit"
                        >
                          <Add className={classes.iconactionsBtn} />
                        </IconButton>
                        <span>افزودن مرحله جدید</span>
                      </div>
                      <div>
                        محاسبه 10% کارمزد سایت:<span>0تومان</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    background: "#F6F6F6",
                    borderRadius: "1rem",
                    padding: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  <h5>
                    در این قسمت توضیحات پیشنهاد خود را بنویسید.همچنین ارسال
                    شماره موبایل ,ایمیل,آیدی شبکه های اجتماعی در پیشنهادها ممنوع
                    است و در صورت تشخیص ,اکانت فرد متخلف بسته خواهد شد.
                  </h5>
                  <form noValidate autoComplete="off">
                    <TextField
                      className={classes.TextFieldDescription}
                      id="outlined-multiline-static"
                      placeholder="توضیحات پیشنهاد خود را بنویسید..."
                      multiline
                      rows={4}
                      variant="outlined"
                      style={{ backgroundColor: "#fff", width: "100%" }}
                    />
                  </form>
                </Grid>
                <h4 className={classes.texth4}>
                  با ارتقا پیشنهاد خود , شانس خود را برای انتخاب شدن توسط
                  کارفرما افزایش دهید.
                </h4>
                <Grid
                  id={classes.FeaturedOffer}
                  container
                  justifyContent="space-around"
                >
                  {" "}
                  <Grid
                    item
                    xs={11}
                    md={5}
                    style={{
                      borderRadius: "1rem",
                      padding: ".75rem",
                      backgroundColor: "#002E6E",
                      color: "#fff",
                    }}
                  >
                    <FormControlLabel
                      style={{ color: "#fff" }}
                      control={<Checkbox {...label} />}
                      label="پیشنهاد برجسته"
                    />
                    <h5 id={classes.FeaturedOfferh5}>
                      پیشنهاد شما در بالای همه پیشنهادها به صورت پین شده به
                      کارفرما نشان داده می شود, که در این صورت احتمال انتخاب شما
                      بیشتر خواهد شد.
                    </h5>
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "left",
                      }}
                    >
                      10,000 تومان
                    </span>
                  </Grid>
                  <Grid
                    item
                    xs={11}
                    md={5}
                    style={{
                      borderRadius: "1rem",
                      padding: ".5rem",
                      border: "2px solid #002E6E",

                      boxShadow: "0 3px 1rem rgba(94, 182, 112, 0.35)",
                    }}
                  >
                    <FormControlLabel
                      color="#fff"
                      control={<Checkbox {...label} />}
                      label="پیشنهاد متمایز"
                    />{" "}
                    <h5>
                      پیشنهاد شما با رنگ متفاوت تری نسبت به سایر پیشنهادها به
                      کارفرما نشان داده خواهد شد. که احتمال دیده شدن پیشنهاد شما
                      بیشتر خواهد شد.
                    </h5>
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "left",
                      }}
                    >
                      10,000 تومان
                    </span>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  style={{
                    background: "#F6F6F6",
                    borderRadius: "1rem",
                    padding: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  <h4>گزارش ثبت پیشنهاد</h4>
                  <Grid
                    container
                    item
                    style={{
                      background: "#F6F6F6",
                      borderRadius: "1rem",
                      padding: "1rem",
                      marginTop: "2rem",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      md={3}
                      direction="column"
                      style={{ textAlign: "center" }}
                    >
                      <div>مجموع روزهای پیشنهادی</div>
                      <h4>12روز</h4>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={3}
                      direction="column"
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      <div>مجموع مبلغ پیشنهادی</div>
                      <h4>5,000,000 تومان</h4>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={3}
                      direction="column"
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      <div>مجموع کارمزد سایت</div>
                      <h4>800,000 تومان</h4>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={3}
                      direction="column"
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      <div>مجموع قیمت ثبت پیشنهاد</div>
                      <h4>10,000 تومان</h4>
                    </Grid>
                  </Grid>
                </Grid>
                <div
                  className={classes.divFooter}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "2rem",
                    width: "100%",
                  }}
                >
                  <div>
                    تعدادپیشنهادهای باقی مانده:<span> 15</span>
                  </div>
                  <div>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      style={{ marginLeft: "1rem" }}
                    >
                      انصراف
                    </Button>
                    <Button variant="contained" color="primary">
                      ثبت پیشنهاد
                    </Button>
                  </div>
                </div>
              </Grid>
            </div>
          </div>
        </Fade>
      </Modal>
      <Paper elevation={3} className={classes.urlPage}>
        پارک جاب/ پروژه ها/ طراحی و گرافیک/ طراحی بنر های تبلیغاتی
      </Paper>
      <Grid container className={classes.boxInformation}>
        <Grid item xs={12} md={4}>
          <Card className={classes.cardInformation}>
            <CardContent>
              <h3 className={classes.cardInformationH3}>اطلاعات ویژه</h3>
              <div className={classes.cardHeader}>
                <span style={{ color: "#909599" }}>بودجه(ریال)</span>
                <span style={{ fontWeight: "bold" }}>50,000,000</span>
              </div>
              <div className={classes.cardHeader}>
                <span style={{ color: "#909599" }}>مدت ارسال پیشنهاد</span>
                <span style={{ fontWeight: "bold" }}> 5 روز 7 ساعت</span>
              </div>
              <div className={classes.cardHeader}>
                <span style={{ color: "#909599" }}>تعداد پیشنهادات</span>
                <span style={{ fontWeight: "bold" }}> 15 پیشنهاد</span>
              </div>
            </CardContent>
            <CardActions>
              <Button
                id={classes.btnSubmit}
                variant="contained"
                color="primary"
                style={{
                  margin: "0 2rem ",
                  width: "100%",
                  alignContent: "center",
                }}
                onClick={handleOpen}
              >
                ثبت پیشنهادبرای پروژه
              </Button>
            </CardActions>
            <CardContent>
              <h3 className={classes.cardInformationH3}>نوع پروژه</h3>
              <div className={classes.boxLink}>
                <div className={classes.btnBoxLink}>
                  {" "}
                  <Link
                    style={{
                      textDecoration: "none",
                      width: "4rem",
                      borderRadius: ".5rem",
                      margin: ".5rem",
                      padding: ".5rem",
                      background: "#FFF3D5",
                      color: "#FDB05E",
                    }}
                    to=""
                  >
                    خصوصی
                  </Link>
                </div>
                <div className={classes.btnBoxLink}>
                  {" "}
                  <Link
                    to=""
                    style={{
                      textDecoration: "none",
                      width: "4rem",
                      borderRadius: ".5rem",
                      margin: ".5rem",
                      padding: ".5rem",
                      background: "#D4F5EA",
                      color: "#009764",
                    }}
                  >
                    برجسته
                  </Link>
                </div>
                <div className={classes.btnBoxLink}>
                  {" "}
                  <Link
                    to=""
                    style={{
                      textDecoration: "none",
                      width: "4rem",
                      borderRadius: ".5rem",
                      margin: ".5rem",
                      padding: ".5rem",
                      background: "#FFCACC",
                      color: "#F1554C",
                    }}
                  >
                    فوری
                  </Link>
                </div>
                <div className={classes.btnBoxLink}>
                  <Link
                    to=""
                    style={{
                      textDecoration: "none",
                      width: "4rem",
                      borderRadius: ".5rem",
                      margin: ".5rem",
                      padding: ".5rem",
                      background: "#ECF1FF",
                      color: "#002E6E",
                    }}
                  >
                    ویژه
                  </Link>
                </div>
              </div>
              <div
                style={{
                  borderBottom: "2px solid #C4CAD0",
                  margin: "2rem 1rem",
                }}
              ></div>
              <h3 className={classes.cardInformationH3}>مهارت ها</h3>
              <div className={classes.skillsBox}>
                <span className={classes.labelSkill}>Adobe Photoshop</span>
                <span className={classes.labelSkill}>Adobe Illustrator</span>
                <span className={classes.labelSkill}>Branding</span>
              </div>
              <div className={classes.skillsBox}>
                <span className={classes.labelSkill}>Adobe Photoshop</span>
                <span className={classes.labelSkill}>Adobe Illustrator</span>
                <span className={classes.labelSkill}>Branding</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8} className={classes.banners}>
          <h3>طراحی بنر های تبلیغاتی</h3>

          <div className={classes.profile}>
            <Avatar alt="Remy Sharp" src={pic1} className={classes.large} />
            <div className={classes.score}>
              <h4>ehsan</h4>
              <Rating name="size-small" defaultValue={2} size="small" />
            </div>
          </div>
          <Typography id={classes.designBaner}>
            پروژه طراحی 5 بنر تبلیغاتی برای محصول های شبکه شامل چه جزئیاتی است:
            <p></p>
            <p>
              مشخصات، عکس ها، لوگو ها، دیتاشیت این 5 طراحی بنر تبلیغاتی برای
              محصول های مختلف شبکه ارسال میشود.
            </p>
            <p>
              هدف از طراحی این بنرها: معرفی و تبلیغ برای فروش محصول های شبکه هست
              <p>که متعاقباً اطلاعات این محصول ها ارسال میشود.</p>
              (1)طرح هایی که در واتس آپ ارسال میشه و اکثر مخاطب ها 75% از گوشی
              موبایل استفاده میکنن پس طرح باید در گوشی موبایل خوب دیده بشه.
            </p>
            (2) طرح ها باید گویا ، واضح ، چشم نواز و چشم گیر باشه
            <p></p>
            (3) ویژگی ها به ترتیب اولویت ارسال خواهد شد.
            <p></p>
            (4) همه چیز به انگلیسی خواهد بود
            <p></p>
            <p>
              {" "}
              (5) تعدادی عکس، لوگو، بروشور از این محصولها ضمیمه خواهد شد و
              میتونید ازعکسها و اطلاعت بیشر که در اینترنت نیز موجوده هست استفاده
              کنید
            </p>
          </Typography>

          <div className={classes.fileTitle}>
            <AttachFile color="action" />
            <h2>فایل های ضمیمه</h2>
          </div>
          <div
            style={{
              borderBottom: "2px solid #C4CAD0",
              margin: "1rem 1rem",
            }}
          ></div>
          <div>
            <a type="download" src="">
              دانلود فایل
            </a>
          </div>
        </Grid>
      </Grid>
      <div className={classes.title}>
        <div className={classes.line}></div>
        <h2>پیشنهاد سایر فریلنسرها</h2>
        <div className={classes.line}></div>
      </div>
      <Grid container xs={12} className={classes.otherFreelancers}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Card className={classes.cardFreelancer} key={item}>
            <Avatar alt="Remy Sharp" src={pic1} className={classes.large} />
            <Typography> ali-mo</Typography>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
            <div className={classes.svgBox}>
              <div className={classes.viewSvg}>
                <AttachMoney color="action" fontSize="small" />
                <span>مبلغ پیشنهادی</span>
              </div>
              <div className={classes.viewSvg}>
                <AccessTime color="action" fontSize="small" />
                <span>زمان پیشنهادی</span>
              </div>
            </div>
            <div className={classes.comment}>
              <span>30,000,000</span>
              <span>1 هفته</span>
            </div>
          </Card>
        ))}
        <Button
          id={classes.btnUpload}
          variant="contained"
          color="default"
          style={{
            margin: "3rem 43%",
            fontWeight: "bold",
            alignContent: "center",
          }}
        >
          بارگزاری پیشنهادات بیشتر...
        </Button>
      </Grid>
    </Layout>
  );
};

export default ViewProject;
