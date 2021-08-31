const express = require("express");

const users = require('./routes/users')
const app = express();

const connectDb = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());


app.use('/api/v1/users', users)

// routes

const port = 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
