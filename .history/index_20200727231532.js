const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  console.log(req);
  res.send("Welcome to My Home!");
}

app.get("/", handleHome);

app.listen(PORT, handleListening);
