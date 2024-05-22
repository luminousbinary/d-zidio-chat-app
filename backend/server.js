const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    
    // to send message to everyone including sender
    io.emit('chat message', msg);
    // console.log("message: " + msg);
  });
  // // to disconnect or to catch when auser has disconnected from server
  // socket.on('disconnect', () => {
  //   console.log('user disconnected');
  // });
});
server.listen(3210, () => {
  console.log("listening on *:3210");
});
