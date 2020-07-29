import express from "express";
import morgan from "morgan";
import helmet from "helmet";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Welcome to My Home!@#!");

const handleProfile = (req, res) => res.send("You are on My Profile!");

const betweenHome = (req, res, next) => {
  console.log("between!");
  next();
};

app.use(morgan("combined"));

app.use(betweenHome);


app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
