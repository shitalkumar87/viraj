require("dotenv").config();
const express = require("express");
const app = express();
const { connect } = require("./config/db");
const PORT = process.env.PORT;
const cors = require("cors");
app.use(cors());
app.use(express.json());
 

app.listen(PORT, async () => {
  try {
    await connect;
    console.log(`http://localhost:8080`);
  } catch (error) {
    console.log("connection failed");
  }
  console.log(`The Port is Running on 8080`);
});