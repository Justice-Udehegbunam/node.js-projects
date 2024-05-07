const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

const port = 3000;

// Middleware
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task manager App.");
});

app.use("/api/v1/tasks", tasks);

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
