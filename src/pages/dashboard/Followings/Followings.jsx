import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FollowersCard from "../../../components/FollowersCard/FollowersCard";
import profPic from "../../../assets/img/avatar.jpg";
import UserProfile from "../../../components/UserProfile/UserProfile";
import { scrollHandler } from "../../../helper/general";

function Followings() {
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
      follow: true,
    },
    {
      id: 3,
      name: "مسعود شاطرآبادی",
      username: "masoodsh77",
      bio: "لورم ایپسوم متن ساختگی با سادگی از ...",
      follow: true,
    },
    {
      id: 4,
      name: "مسعود شاطرآبادی",
      username: "masoodsh77",
      bio: "لورم ایپسوم متن ساختگی با سادگی از ...",
      follow: true,
    },
  ]);
  useEffect(() => {
    scrollHandler(0, 0);
  }, []);
  return (
    <Grid container>
      <h3 style={{ paddingBottom: "2rem", margin: "0" }}>دنبال کردن</h3>
      <Grid container spacing={2}>
        <Grid container item md={8} xs={12}>
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

export default Followings;
