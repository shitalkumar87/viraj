const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const PORT = process.env.port || 8080;
const { router } = require("./router");
const { addUser, removeUser, getUsersinRoom, getUser } = require("./users");
const cors = require("cors");
//Basic rundown to make server.io working
const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketio(server);

// Managing one specific socket in callback function
io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);

    socket.emit("message", {
      user: "admin",
      text: `${user.name},welcome to the room ${user.room}`,
    });
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `Welcome to the room ${user.name}`,
    });
    socket.join(user.room);
    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.name, text: message });
    callback();
  });
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
