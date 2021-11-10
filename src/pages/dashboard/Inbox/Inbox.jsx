import {
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  Paper,
  List,
} from "@material-ui/core";
import ChatItemList from "../../../components/ChatItem/ChatItemList";
import { Search } from "@material-ui/icons";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import pic from "../../../assets/img/picMan3.jpg";

import "./inbox.css";
import { scrollHandler } from "../../../helper/general";

function Inbox(props) {
  const [messages, setMessages] = React.useState([]);
  const [newMessage, setNewMessage] = React.useState([]);
  // const socket = React.useRef(
  //   SocketIOClient.connect("http://localhost:3010/socket")
  // );
  // React.useEffect(() => {
  //   console.log("render use effect", props.location.state);
  //   socket.current.on("newMessage", (message) => {
  //     console.log(message);
  //     setMessages((messages) => messages.concat(message));
  //     scrollableGrid.current.scroll(0, scrollableGrid.current.scrollHeight);
  //   });
  //   socket.current.on("deleteMsg", (id) => {
  //     setMessages(function (messages) {
  //       let findIndex = -1;
  //       messages.forEach((message, index) => {
  //         if (message.id == id) {
  //           findIndex = index;
  //         }
  //       });
  //       return removeItemWithSlice(messages, findIndex);
  //     });
  //   });
  // }, []);
  // const sendMessage = () => {
  //   if (!newMessage) return;
  //   socket.current.emit("newMessage", {
  //     id: "",
  //     msg: newMessage,
  //     sender: {
  //       name: props.location.state.name,
  //       gender: props.location.state.gender,
  //     },
  //   });
  //   setNewMessage("");
  // };

  // const _handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     sendMessage();
  //   }
  // };
  useEffect(() => {
    scrollHandler(0, 0);
  }, []);
  return (
    <Grid container className="container">
      <h3 style={{ paddingBottom: "2rem", margin: "0" }}>صندوق پیام ها</h3>
      <Grid
        container
        item
        xs={12}
        direction="row"
        justifyContent="space-between"
      >
        <Grid
          container
          item
          xs={12}
          md={3}
          // direction="column"
          // alignItems="center"
          className="inbox"
        >
          <Paper
            elevation={3}
            style={{
              height: "100%",
              marginLeft: "1rem",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <Paper
              item
              elevation={3}
              className="search-box"
              style={{ border: "none" }}
            > */}
            <Input
              className="input_style"
              required
              disableUnderline={true}
              placeholder="جستجوی شخص ..."
              style={{
                height: "2.5rem",
                backgroundColor: "#F0F1F3",
                marginTop: "3rem",
                position: "relative",
                right: "12%",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <Search color="primary" />
                  </IconButton>
                </InputAdornment>
              }
            />
            {/* </Paper> */}
            <Grid item xs={3} style={{ height: "100%", width: "100%" }}></Grid>
          </Paper>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={9}
          direction="column"
          className="divRootProfile"
        >
          <Paper
            style={{
              height: "100%",
              borderRadius: "1rem",
              position: "relative",
              top: "0.5rem",
            }}
          >
            <Grid container direction="column" overflow="hidden">
              <Grid id="headerPaper">
                <Paper elevation={3} item className="header">
                  <div className="header-right">
                    <div className="avatar-">
                      <img src={pic} />
                    </div>
                    <div className="profile">
                      <h2>سعید رضایی</h2>
                      <h4>شرکت همراهان</h4>
                    </div>
                  </div>
                  <Link
                    id="dispalyProfile"
                    to=""
                    style={{
                      fontSize: "1rem",
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "#009CBB",
                      textAlign: "center",
                      margin: "2rem",
                    }}
                  >
                    مشاهده پروفایل
                  </Link>
                </Paper>
              </Grid>
              <Grid item className="middle" direction="column">
                <List dense={true} className="listChat">
                  <ChatItemList
                    logo={pic}
                    message={{
                      author: "ali",
                      body: "fdsd sdfsdf sfs dfsdf sdfsdfsdfs df fdf fgdfgdfgd gdgdgd dgdf",
                    }}
                  />
                  <ChatItemList
                    logo={pic}
                    message={{
                      author: "mmad",
                      body: "fdsd sdfsdf sfs dfsdf sdfsdfsdfs df fdf fgdfgdfgd gdgdgd dgdf",
                    }}
                  />
                  <ChatItemList
                    logo={pic}
                    message={{
                      author: "ali",
                      body: "fdsd sdfsdf sfs dfsdf sdfsdfsdfs df fdf fgdfgdfgd gdgdgd dgdf",
                    }}
                  />
                  <ChatItemList
                    logo={pic}
                    message={{
                      author: "mmad",
                      body: "fdsd sdfsdf sfs dfsdf sdfsdfsdfs df fdf fgdfgdfgd gdgdgd dgdf",
                    }}
                  />
                  <ChatItemList
                    logo={pic}
                    message={{
                      author: "ali",
                      body: "fdsd sdfsdf sfs dfsdf sdfsdfsdfs df fdf fgdfgdfgd gdgdgd dgdf",
                    }}
                  />
                  <ChatItemList
                    logo={pic}
                    message={{
                      author: "mmad",
                      body: "fdsd sdfsdf sfs dfsdf sdfsdfsdfs df fdf fgdfgdfgd gdgdgd dgdf",
                    }}
                  />
                  <ChatItemList
                    logo={pic}
                    message={{
                      author: "mmad",
                      body: "lkargf aekrjgnaer gakjernglj aer g ae rgaenrognlawir ",
                    }}
                  />
                </List>
              </Grid>
              <Grid
                style={{ position: "relative", top: "2rem", display: "flex" }}
                item
                xs={12}
                className="footer"
                container
                justify={"center"}
                alignItems={"center"}
              >
                <IconButton aria-label="file" className="icon-file-btn">
                  <AttachFileIcon />
                </IconButton>
                <InputBase
                  className="input-box"
                  defaultValue="Naked input"
                  inputProps={{ "aria-label": "naked" }}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="متن خود را وارد کنید..."
                />
                <Button variant="contained" color="denger" className="send-btn">
                  ارسال
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Inbox;
