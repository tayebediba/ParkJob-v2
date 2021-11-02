import React from "react";
import { Paper, LinearProgress, Avatar, Grid } from "@material-ui/core";
import design from "../../assets/Icons/dashboardIcon/design.svg";
import person from "../../assets/Icons/dashboardIcon/person.svg";
import date from "../../assets/Icons/dashboardIcon/date.svg";
import task from "../../assets/Icons/dashboardIcon/task.svg";

function ProjectCard({ title, freelancer, process, endDate, status }) {
  if(title.length >= 30 ){
    var cardTitle = title.substring(0, 23)+"...";
  }else{
    cardTitle = title
  }
  const dateended = endDate.substring(0, 10);
  return (
    <Grid container direction="row" xs={3}>
      <Paper className=" card-dashboard">
        <Avatar src={design} className="pink"></Avatar>
        <h4>{cardTitle}</h4>
        <div className="mainAvatarBox">
          <img src={person} alt="person" />
          <span>فریلنسر: </span>
          <span>{freelancer}</span>
        </div>
        <div className="progresDeatails">
          <span>میزان پیشرفت</span>
          <span>{process}%</span>
        </div>
        <div className="progresBar">
          <LinearProgress color="secondary" variant="buffer" value={process} />
        </div>
        <div className="progresDeatails">
          <div className="mainAvatarBox">
            <img src={date} alt="date" />
            <span>تاریخ پایان</span>
          </div>
          <div className="mainAvatarBox">
            <img src={task} alt="task" />
            <span>وضعیت پروژه </span>
          </div>
        </div>
        <div className="date-Condition">
          <span className="date">{dateended}</span>
          <span
            className={`Condition ${
              status === 2
                ? "inProcess"
                : status === 1
                ? "Pending"
                : status === 3
                ? "Finished"
                : null
            }`}
          >
            {status === 1
              ? "درحال بررسی"
              : status === 2
              ? "درحال اجرا"
              : status === 3
              ? "پایان یافته"
              : null}
          </span>
        </div>
      </Paper>
    </Grid>
  );
}

export default ProjectCard;
