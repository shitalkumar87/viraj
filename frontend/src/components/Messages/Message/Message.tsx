import { Text } from "@chakra-ui/react";
import React from "react";

import "./Message.css";

const Message = ({ message: { text, user }, name }: any) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div
      style={{
        backgroundColor: "rgb(68, 194, 120)",
        color: "white",
        margin: "left",
        marginTop: "5px",
        width: "50%",
        borderRadius: "10px",
      }}
    >
      <Text fontWeight={"bold"} >{trimmedName}</Text>
      <div>
        <Text>{text}</Text>
      </div>
    </div>
  ) : (
    <div style={{
        backgroundColor: "#444EC2",
        color: "white",
        marginLeft: "50%",
        marginTop: "10px",
        width: "50%",
        borderRadius: "10px",
      }}>
      <div>
        <Text fontWeight={"bold"}>{user}</Text>
      </div>
      <Text>{text}</Text>
    </div>
  );
};

export default Message;
