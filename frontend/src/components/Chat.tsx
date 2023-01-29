import { useEffect, useState } from "react";
// querystring module
import querystring from "query-string";
import io from "socket.io-client";
import { useLocation, useParams } from "react-router-dom";
import InfoBar from "./Infobar/Info";
import "./Chat.css";
import Messages from "./Messages/Message";
import TextContainer from "./TextContainer/TextContainer";
import Input from "./Input/Input";

let socket: any;

const Chat = () => {
  const [name, setName] = useState<any>("");
  const [room, setRoom] = useState<any>("");
  const [users, setUsers] = useState<any>("");
  const [message, setMessage] = useState<any>("");
  const [messages, setMessages] = useState<any>([]);

  const ENDPOINT = "wss://mangrove-adventurous-rabbit.glitch.me";

  const location = useLocation();
  useEffect(() => {
    const { name, room } = querystring.parse(location.search); // location comes with react router and gives us a prop called location

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);
    socket.emit("join", { name, room }, (error: any) => {
      if (error) {
        alert(error);
      }
    });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);
  useEffect(() => {
    socket.on("message", (message: any) => {
      setMessages((messages: any) => [...messages, message]);
    });
    socket.on("roomData", ({ users }: { users: any }) => {
      setUsers(users);
    });
    return () => socket.off("message").off();
  }, [messages]);

  const sendMessage = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (message) {
      // when message send input field is cleared through callback
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  // console.log(message, messages);
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
