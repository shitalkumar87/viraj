import React from "react";

import "./Message.css";

const Message = ({ message: { text, user }, name }: any) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div style={{ backgroundColor: "gray", color: "black",marginTop:"5px" }}>
      <p>{trimmedName}</p>
      <div>
        <p>{text}</p>
      </div>
    </div>
  ) : (
    <div>
      <div>
        <p>{text}</p>
      </div>
      <p>{user}</p>
    </div>
  );
};

export default Message;
