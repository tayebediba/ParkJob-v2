import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Rating } from "@material-ui/lab";
import "./topFreelancersCard.css";

function TopFreelancersCard({ data }) {
  const [value, setValue] = React.useState(4.5);
  console.log(data.pictureUrl, "testimage");
  return (
    <Grid container md={2} xs={12} direction="column">
      <Card className="top-freelancers-card">
        <Grid xs={12} item justify="center" className="userProfileContainer">
          <Avatar
            style={{ height: "9rem", width: "9rem" }}
            src={data.pictureUrl}
            alt="profpic"
          />
        </Grid>
        <CardContent>
          <Typography>{data.userName}</Typography>
          <Typography color="textSecondary">{data.title}</Typography>
          <Box
            component="fieldset"
            mb={3}
            borderColor="transparent"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography style={{ paddingTop: ".5rem" }}>
              {data.rateAverage}
            </Typography>
            <Rating
              name="half-rating-read"
              defaultValue= {data.rateAverage}
              precision={0.5}
              readOnly
            />
          </Box>
          <Button variant="contained">مشاهده پروفایل</Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default TopFreelancersCard;
