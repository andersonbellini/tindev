const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const server = express();

mongoose.connect(
  "mongodb+srv://user:user@cluster0-n7j2q.mongodb.net/tindev?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

server.user(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
