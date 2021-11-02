import {
  Card,
  CardContent,
  Grid,
  Typography,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import React from "react";
import classes from "./workSamplesTab.module.css";
import sampele from "../../../../../assets/img/home/sampel.png";
import { Star, DateRange, Close, Visibility } from "@material-ui/icons";
import modal from "../../../../../assets/img/home/modal.png";

const WorkSamplesTab = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
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
            <Grid container>
              <Grid xs={12} md={12} className={classes.close}>
                <Close
                  onClick={handleClose}
                  style={{
                    cursor: "pointer",
                    alignSelf: "self-end",
                    marginBottom: ".5rem",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <div>
                  <h3 id="transition-modal-title">طراحی پوستر مسابقات کشوری</h3>
                  <p id="transition-modal-description">
                    react-transition-group animates me. react-transition-group
                    animates me. react-transition-group animates me.
                  </p>
                </div>
                <div style={{ fontSize: "13px", marginBottom: "1rem" }}>
                  <span>نوع پروژه:</span>
                  <span>خصوصی</span>
                </div>
                <div style={{ fontSize: "13px" }}>
                  <span>لینک مشاهده:</span>
                  <span>
                    {" "}
                    <a href="">https://parkjob.ir/profile/designila</a>
                  </span>
                </div>
                <div className={classes.boxSvg}>
                  <div>
                    <DateRange />
                    <span>1400/02/06 - 1400/01/12</span>
                  </div>
                  <div>
                    <Star />
                    <span>250</span>
                  </div>
                  <div>
                    <Visibility />
                    <span>425</span>
                  </div>
                </div>
                <h3>سایر نمونه کارها</h3>
                {[1, 2, 3, 4].map((item) => (
                  <div className={classes.sampel} key={item}>
                    <div className={classes.imgSampel}>
                      {/* <img src={} alt="sampel-pic" /> */}
                    </div>
                    <p className={classes.textSize}>
                      طراحی ست اداری شرکت همیاران
                    </p>
                  </div>
                ))}
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                direction="column"
                style={{
                  padding: "1rem",
                  borderRight: "2px solid #C4CAD0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {/* <Close
                  className={classes.Close}
                  onClick={handleClose}
                  style={{
                    cursor: "pointer",
                    alignSelf: "self-end",
                    marginBottom: ".5rem",
                  }}
                /> */}
                <div
                  style={{
                    borderRadius: "1rem",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {" "}
                  <img
                    src={modal}
                    alt="modal-pic"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div
                  className={classes.DivImgSamples}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "1rem",
                    alignItems: "center",
                  }}
                >
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div className={classes.imgSampels} key={item}>
                      {/* <img src="" alt="" /> */}
                    </div>
                  ))}
                </div>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
      <Grid item md={4} xs={12}>
        <Card className={classes.WorkSamplesCard} onClick={handleOpen}>
          <img src={sampele} alt="pic-sampel" />
          <CardContent>
            <h4 className={classes.title}>title</h4>
            <Typography
              className={classes.content}
              style={{ padding: ".5rem" }}
            >
              content
            </Typography>
            <div className={classes.boxHeader}>
              <div>
                <span>250</span>
                <span>
                  <Star />
                </span>
              </div>
              <div>
                <span>1400/4/6</span>
                <span>
                  <DateRange />
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
export default WorkSamplesTab;
