import {
  Button,
  Fade,
  Grid,
  Modal,
  Paper,
  Backdrop,
  TextField,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowDropDown, Close } from "@material-ui/icons";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import style from "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2.1rem",
  },
  title: {
    color: "#192129",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  avatarBox: {
    display: "flex",
    alignItems: "center",
    fontSize: ".95rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Navbar = ({ displayBtn, handleDisplayBtn, setDisplayBtn }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setDisplayBtn(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenEditModal = () => {
    setOpenEditModal(true);
    setOpen(false);
    setDisplayBtn(false);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  return (
    <Grid container>
      <Paper className={classes.paper} id="paper">
        <h2 className={classes.title}></h2>

        <div className={classes.avatarBox} id="AccountCircle">
          {/* <span>علی محمدی</span> */}

          <AccountCircle
            onClick={handleDisplayBtn}
            id="AccountCircleIcon"
            color="primary"
            fontSize="large"
          />
        </div>
      </Paper>
      <Paper className={displayBtn ? "ShowdivPaper" : "divPaper"} elevation={3}>
        <Button className="butttonSettings" onClick={handleOpen}>
          {" "}
          <Link className="LinkDivPaper" to="/dashboard">
            <SettingsIcon className="LinkDivPapeIcon" />
            تنظیمات حساب کاربری
          </Link>
        </Button>
        <Button className="butttonLogout">
          <Link className="LinkDivPaper2" to="/">
            <ExitToAppIcon className="LinkDivPapeIcon" />
            خروج
          </Link>
        </Button>
      </Paper>
      <Modal
        aria-labelledby="freelancerRate-reportModal"
        aria-describedby="transition-modal-description"
        open={open}
        className="modal"
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="paper">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2 id="transition-modal-title"> تنظیمات حساب کاربری</h2>
              <Close
                onClick={handleClose}
                style={{
                  position: "relative",
                  top: "0.7rem",
                  cursor: "pointer",
                }}
              />
            </div>
            <div style={{ position: "relative", marginTop: "1rem" }}>
              <div>
                <div>
                  {" "}
                  <span className="spanUserName">نام کاربری</span>
                </div>

                <div>
                  {" "}
                  <h3>علی محمدی</h3>
                </div>
              </div>
              <div className="divRoot">
                <div>
                  <div>
                    {" "}
                    <span className="spanUserName">ایمیل</span>
                  </div>

                  <div>
                    {" "}
                    <h3>alimaohamadi@gmail.com</h3>
                  </div>
                </div>
                <div>
                  <div>
                    {" "}
                    <button className="btnsubmitemail">تایید ایمیل</button>
                  </div>
                </div>
              </div>
              <div className="divRoot">
                <div>
                  <div>
                    {" "}
                    <span className="spanUserName"> شماره همراه</span>
                  </div>

                  <div>
                    {" "}
                    <h3>۰۹۳۰۳۲۳۲۳۳۲</h3>
                  </div>
                </div>
                <div>
                  <div>
                    {" "}
                    <button className="btnsubmit"> تایید شماره همراه</button>
                  </div>
                </div>
              </div>
              <div className="divRoot">
                <div>
                  <div>
                    {" "}
                    <span className="spanUserName">رمز عبور</span>
                  </div>

                  <div>
                    {" "}
                    <h3>*********</h3>
                  </div>
                </div>
                <div>
                  <div>
                    {" "}
                    <button onClick={handleOpenEditModal} className="btnsubmit">
                      ویرایش
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div className="divRoot2">
                <div>
                  <div>
                    {" "}
                    <span className="spanUserName">حذف حساب کاربری</span>
                  </div>

                  <div>
                    {" "}
                    <h3>آیا از حذف حساب کاربری خود مطمين هستید ؟</h3>
                  </div>
                </div>
                <div>
                  <div>
                    {" "}
                    <button className="btnsubmit">حذف حساب</button>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Button
                onClick={handleClose}
                style={{ marginLeft: "1rem", top: "1rem" }}
                variant="contained"
                color="primary"
              >
                ذخیره
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="freelancerRate-reportModal"
        aria-describedby="transition-modal-description"
        open={openEditModal}
        className="modal"
        onClose={handleCloseEditModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openEditModal}>
          <div className="paper">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Close
                onClick={handleCloseEditModal}
                style={{
                  position: "relative",
                  top: "0.7rem",
                  cursor: "pointer",
                }}
              />
            </div>
            <div>
              <div style={{ position: "relative", top: "1.8rem" }}>
                {" "}
                <span className="spanUserName">نام کاربری</span>
              </div>
              <div className="divFormRoot">
                <div className="divForm">
                  <div>
                    <input type="password" value="0000000000" />
                  </div>
                  <div>
                    <FormControlLabel
                      control={
                        <Switch
                          // checked={state.antoine}
                          // onChange={handleChange}
                          name="antoine"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", top: "1.8rem" }}>
                {" "}
                <span className="spanUserName"> رمز عبور جدید</span>
              </div>
              <div className="divFormRoot">
                <div className="divForm">
                  <div>
                    <input type="password" />
                  </div>
                  <div>
                    <FormControlLabel
                      control={
                        <Switch
                          // checked={state.antoine}
                          // onChange={handleChange}
                          name="antoine"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", top: "1.8rem" }}>
                {" "}
                <span className="spanUserName"> تکرار رمز عبور جدید</span>
              </div>
              <div className="divFormRoot">
                <div className="divForm">
                  <div>
                    <input type="password" />
                  </div>
                  <div>
                    <FormControlLabel
                      control={
                        <Switch
                          // checked={state.antoine}
                          // onChange={handleChange}
                          name="antoine"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Button
                onClick={handleClose}
                style={{ marginLeft: "1rem", top: "1rem" }}
                variant="contained"
                color="default"
              >
                انصراف
              </Button>
              <Button
                style={{ marginLeft: "1rem", top: "1rem" }}
                variant="contained"
                color="primary"
              >
                ذخیره
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </Grid>
  );
};

export default Navbar;
