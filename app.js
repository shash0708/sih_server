const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");
const app = express();

mongoose.set("strictQuery", true);
const url =process.env.MONGODB_URL;
const port = process.env.PORT || 9000;
mongoose.connect(url);
const con = mongoose.connection;
con.once("open", () => {
  console.log("Mongo DB connected");
});


app.use(express.json());
app.get('/',(req,res)=>{
  res.send('Welcome')
})
// const userRouter = require("./router/users");
// const linkRouter = require("./router/linkedin");
// const testRouter = require("./router/test");
// app.use("/", userRouter);
// app.use("/", linkRouter);
// app.use("/", testRouter);
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});