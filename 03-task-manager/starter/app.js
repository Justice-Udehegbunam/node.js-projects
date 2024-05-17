const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

const port = process.env.PORT || 3000;
// "process.env.PORT": this is used in production whereby it will be the environment where the project is hosted that will determine the port number

// Middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);
// To handle 404 errors
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL, "Task-Manager");
    // THIS FETCHES AND PROCESSES THE PASSWORD FOR THE STORED ENV VARIABLE
    app.listen(port, () => {
      console.log(`App started on port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
