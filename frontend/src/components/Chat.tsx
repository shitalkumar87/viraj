import { useEffect, useState } from "react";
// querystring module
// import querystring from "query-string";
// import io from "socket.io-client";
import { useLocation, useParams } from "react-router-dom";

let socket: any;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<String[]>([]);

  const ENDPOINT = "localhost:8080";

  const location = useLocation();
  useEffect(() => {
    // const { name, room } = querystring.parse(location.search); // location comes with react router and gives us a prop called location

    // socket = io(ENDPOINT);

    setName(String(name));
    setRoom(String(room));
    socket.emit("join", { name, room }, () => {});
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);
  useEffect(() => {
    socket.on("message", () => {
      setMessages([...messages, message]);
    });
  }, [messages]);
  const sendMessage = () => {
    if (message) {
    }
  };
  return (
    <div className="outerContainer">
      <div className="container">
        {/* <InfoBar room={room} />
        <Messages messages={messages} name={name} /> */}
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) => (event.key === "Enter" ? sendMessage() : null)}
        />
      </div>
      {/* <TextContainer users={users} /> */}
    </div>
  );
};

export default Chat;
