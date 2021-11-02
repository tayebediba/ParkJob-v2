import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import {
  CloseRounded,
  AttachMoney,
  Textsms,
  AssignmentTurnedIn,
  SupervisorAccount,
} from "@material-ui/icons";
import "./dashboardMain.css";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import InformationCard from "./informationCard/InformationCard";
import NewProjectTable from "./NewProjectTable/NewProjectTable";
import http from "../../../services/httpService";
import MessageTable from "../../../components/MessageTable/MessageTable";
import TicketTable from "../../../components/TicketTable/TicketTable";


const DashboardMain = () => {
  const [projectStatus, setProjectStatus] = useState([]);
  const [Message, setMessage] = useState([]);
  const [ticket, setTicket] = useState([]);
  const [statistics, setStatistics] = useState([]);
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    http.get("/Dashboard/FetchUserProjectData").then((res) => {
      setProjectStatus(res.data.value.result);
    });
    http.get("/Dashboard/GetUserMessagesData").then((res) => {
      setMessage(res.data.value);
    });
    http.get("/Dashboard/FetchUserTicketData").then((res) => {
      setTicket(res.data.value);
    });
    http.get("/Dashboard/FetchUserStatistics").then((res) => {
      setStatistics(res.data.value);
    });
    http.get("/Dashboard/SuggestionProjects").then((res) => {
      setProjectList(res.data.value.result);
      console.log(res.data.value.result);
    });
  }, []);
  return (
    <Grid container item xs={12}>
      <h3 style={{ paddingBottom: "2rem", margin: "0" }}>داشبورد</h3>

      <Grid item xs={12}>
        <Paper className="dashbardAlert">
          <Typography>
            جهت ارسال تعداد بیشتر پیشنهاد می توانید از منوی ارتقا عضویت نسبت به
            تغییر پلن خود اقدام کنید
          </Typography>
          <CloseRounded />
        </Paper>
      </Grid>
      <Grid
        container
        item
        xs={12}
        justify="space-between"
        direction="row"
        className="project-link"
      >
        <Typography>وضعیت آخرین پروژه</Typography>
        <Typography className="color-blue">مدیریت پروژه ها</Typography>
      </Grid>
      <Grid container direction="row" spacing={2} justify="center">
        {projectStatus.map((item, i) => {
          return (
            <ProjectCard
              key={i}
              title={item.title}
              freelancer={item.freelancerUserName}
              process={item.progressBar}
              endDate={item.endDate}
              status={item.status}
            />
          );
        })}
        <Grid item md={6} xs={12}>
          <Paper className="cardMessages">
            <Grid
              container
              item
              xs={12}
              justify="space-between"
              direction="row"
              className="project-link"
              style={{ height: "3rem" }}
            >
              <Typography>جدیدترین پیام ها</Typography>
              <Typography className="color-blue">مشاهده همه</Typography>
            </Grid>
            <MessageTable data={Message} />
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper className="cardMessages">
            <Grid
              container
              item
              xs={12}
              justify="space-between"
              direction="row"
              className="project-link"
              style={{ height: "3rem" }}
            >
              <Typography>آخرین تیکت ها</Typography>
              <Typography className="color-blue">مشاهده همه</Typography>
            </Grid>
            <TicketTable data={ticket} />
          </Paper>
        </Grid>
        <InformationCard
          title="درآمد کسب شده"
          info={`${statistics.income} ریال`}
          icon={<AttachMoney />}
          iconColor="pinkBox"
          boxColor="pinkColor"
        />
        <InformationCard
          title="پروژه های انجام شده"
          info={statistics.completedProjects}
          icon={<AssignmentTurnedIn />}
          iconColor="blueBox"
          boxColor="blueColor"
        />
        <InformationCard
          title="پیشنهادهای ارسال شده"
          info={statistics.suggestionsSent}
          icon={<Textsms />}
          iconColor="pinkBox"
          boxColor="pinkColor"
        />
        <InformationCard
          title="تعداد دنبال کنندگان شما"
          info={statistics.followerCount}
          icon={<SupervisorAccount />}
          iconColor="blueBox"
          boxColor="blueColor"
        />
        <Grid item xs={12} sm={12}>
          <Paper className="cardMessages">
            <Grid
              container
              item
              xs={12}
              justify="space-between"
              direction="row"
              className="project-link"
            >
              <Typography>جدیدترین پروژه های ثبت شده</Typography>
              <Typography className="color-blue">مشاهده همه</Typography>
            </Grid>
            <NewProjectTable data={projectList} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardMain;
