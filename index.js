const express = require("express");
const mongoose = require("mongoose");

const userRouter =  require('./routes/user')
const {startConnection} = require('./connection.js')
const {logReqRes} = require('./middlewares/index')

const app = express();
const PORT = 8000;

startConnection("mongodb://127.0.0.1:27017/users-api-pg")

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/user',userRouter)


// custom middleware
app.use(logReqRes("log.txt"))

app.listen(PORT, (err) => {
  console.log("Server is listening at ", PORT);
});
