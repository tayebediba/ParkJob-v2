import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import classes from "./questionsTab.module.css";

const QuestionsTab = () => {
  return (
    <div className={classes.boxQuestions}>
      {[1, 2, 3, 4, 5].map((item) => (
        <Accordion className={classes.accordion} key={item}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              پرداخت امن چیست؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.content}>
              یکی از نگرانی کارفرمایان اطمینان از کیفیت و تحویل به موقع یا
              نگرانی از ریسک سوخت مبلغ پرداختیشان است. در راستای کسب اعتماد شما
              و تضمین سلامت پرداخت ها , سامانه "پرداخت امن دو مرحله ای " را را ه
              اندازی نموده است. با کمک سیستم پرداخت امن پیمانکار پروژه از پرداخت
              مزدکار خود مطمئن می گردد همچنین کارفرما از روند انجام پروژه و
              تحویل به موقع آن اطمینان می یابد در صورت بروز هرگونه مشکل برای هر
              طرف امکان "ایجاداختلاف " نسبت به پروژه در میزکار آن وجود داردکه با
              کمک ان میتوان نسبت به بررسی مشکل و رفع آن در کوتاه مدت اقدام
              نمود.با پرداخت امن تنها پس از تحویل پروژه به کارفرما, مبلغ پرداختی
              پروژه به حساب پیمانکار آن واریز می گردد.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default QuestionsTab;
