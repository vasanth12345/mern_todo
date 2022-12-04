const express = require("express");
const mangoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const router = require("./routers/router.js");

// middlewares
app.use(express.json());
app.use("/", router);
app.use(cors());

// db connect
mangoose.connect(process.env.MONGO_DB_URL, () => {
  try {
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
});

// api

//listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
