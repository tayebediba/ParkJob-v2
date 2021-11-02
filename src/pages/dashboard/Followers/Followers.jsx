import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import FollowersCard from "../../../components/FollowersCard/FollowersCard";
import "./Followers.css";
import profPic from "../../../assets/img/avatar.jpg";
import UserProfile from "../../../components/UserProfile/UserProfile";

function Followers() {
  const [freelancer] = useState([
    {
      id: 1,
      name: "مسعود شاطرآبادی",
      username: "masoodsh77",
      bio: "لورم ایپسوم متن ساختگی با سادگی از ...",
      follow: true,
    },
    {
      id: 2,
      name: "مسعود شاطرآبادی",
      username: "masoodsh77",
      bio: "لورم ایپسوم متن ساختگی با سادگی از ...",
      follow: false,
    },
    {
      id: 3,
      name: "مسعود شاطرآبادی",
      username: "masoodsh77",
      bio: "لورم ایپسوم متن ساختگی با سادگی از ...",
      follow: false,
    },
    {
      id: 4,
      name: "مسعود شاطرآبادی",
      username: "masoodsh77",
      bio: "لورم ایپسوم متن ساختگی با سادگی از ...",
      follow: false,
    },
  ]);
  return (
    <Grid container>
      <h3 style={{ paddingBottom: "2rem", margin: "0" }}>دنبال کننده ها</h3>

      <Grid container item spacing={2} className="followersBox">
        <Grid item md={8} xs={12} className="cardBox">
          {freelancer.map((item) => {
            return (
              <FollowersCard
                key={item.id}
                name={item.name}
                username={item.username}
                bio={item.bio}
                pic={profPic}
                follow={item.follow}
              />
            );
          })}
        </Grid>
        <Grid container item md={4} xs={12}>
          <UserProfile />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Followers;
