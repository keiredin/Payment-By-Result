const express = require("express");

const users = require('./routes/users')
const app = express();
require("express-async-errors");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const connectDb = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());


app.use('/api/v1/users', users)

// routes

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
