require("dotenv").config();
const express = require("express");
const app = express();
const { connect } = require("./config/db");
const PORT = process.env.PORT;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const { TeacherRouter } = require("./router/Teacher.router");
const { QuestionRouter } = require("./router/Question.router");
app.use("/teacher", TeacherRouter);
app.use("/question", QuestionRouter);
app.listen(PORT, async () => {
  try {
    await connect;
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.log("connection failed");
  }
  console.log(`The Port is Running on ${PORT}`);
});
