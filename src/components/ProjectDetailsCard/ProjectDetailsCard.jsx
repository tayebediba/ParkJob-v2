import { Button, Card, CardActions, CardContent, Chip, Grid, Typography } from "@material-ui/core";
import React from "react";
import "./projectDetailsCard.css";
import { AccessTime, AttachMoney } from "@material-ui/icons";

const ProjectDetailsCard = () => {
  return (
    <Grid item xs={12}>
      <Card className="card-body">
        <CardContent>
          <h4>طراحی بنرهای تبلیغاتی</h4>
          <Typography variant="body1" color="textSecondary">
            لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ،
            صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به
            عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری
            و کلی طرح سفارش گرفته شده استفاده می نماید، تا
          </Typography>
          <div className="chipBox">
            <Chip className="chipCard" label="Adobe Photoshop" />
            <Chip className="chipCard" label="Branding" />
            <Chip className="chipCard" label="Branding" />
            <Chip className="chipCard" label="Adobe Photoshop" />
            <Chip className="chipCard" label="Branding" />
            <Chip className="chipCard" label="Branding" />
          </div>
          <div className="line"></div>
          <Grid container>
            <Grid md={6}>
              {" "}
              <div>
                <AttachMoney color="action" fontSize="small" />
                <Typography variant="caption" color="textSecondary">
                  بودجه پروژه (ریال)
                </Typography>
              </div>
              <span>500,000,000</span>
            </Grid>
            <Grid md={6}>
              <div style={{ alignItems: "center" }}>
                <AccessTime color="action" fontSize="small" />
                <Typography variant="caption" color="textSecondary">
                  مدت ارسال پیشنهاد
                </Typography>
              </div>
              <span>14 روز و 20 ساعت</span>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
        <Button className="btnCard" variant="contained">
              مشاهده پروژه
            </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default ProjectDetailsCard;
