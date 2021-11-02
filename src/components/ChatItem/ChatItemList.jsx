import { ListItem, Avatar } from "@material-ui/core";

export default function ChatItemList(props) {
  const { message, logo } = props;
  console.log("mesageee", message);
  const isOwnMessage = message.author === "ali";

  return (
    <>
      <ListItem style={styles.listItem(isOwnMessage)}>
        <div style={styles.avatar(isOwnMessage)}>
          {isOwnMessage ? (
            <Avatar alt="Remy Sharp" src={logo} />
          ) : (
            <Avatar alt="Remy Sharp" src="" />
          )}
        </div>
        <div style={styles.chatBox(isOwnMessage)}>
          <div style={styles.container(isOwnMessage)}>
            {message.body}
            <div style={styles.timestamp(isOwnMessage)}>time</div>
          </div>
        </div>
      </ListItem>
    </>
  );
}
const styles = {
  listItem: (isOwnMessage) => ({
    // flexDirection: "column",
    alignItems: isOwnMessage ? "flex-end" : "flex-start",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: isOwnMessage ? "flex-end" : "flex-start",
  }),
  container: (isOwnMessage) => ({
    borderRadius: 12,
    maxWidth: "75%",
    padding: 16,
    color: isOwnMessage ? "#2699FB" : "white",
    fontSize: 16,
    backgroundColor: isOwnMessage ? "#b3d1ff" : "#0066ff",
  }),
  author: { fontSize: 10, color: "gray" },
  timestamp: (isOwnMessage) => ({
    fontSize: 10,
    color: isOwnMessage ? "#2699FB" : "white",
    textAlign: "right",
    paddingTop: 4,
  }),

  avatar: (isOwnMessage) => ({
    order: isOwnMessage ? 1 : 0,
  }),
  chatBox: (isOwnMessage) => ({
    margin: 3,
    order: isOwnMessage ? 0 : 1,
  }),
};
