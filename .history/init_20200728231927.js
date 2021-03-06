import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();


const handleHome = (req, res) => res.send("Welcome to My Home!@#!");

const handleProfile = (req, res) => res.send("You are on My Profile!");


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.use(betweenHome);


app.get("/", handleHome);

app.get("/profile", handleProfile);
