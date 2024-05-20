require("dotenv").config();
// async errors
require("express-async-errors");

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

// Middlewares
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1> <a href ="/api/v1/products">Products route</a>`);
});

app.use("/api/v1/products", productsRouter);

// Products Route

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listening on port ${port}....`));
  } catch (error) {
    console.log(error.message);
  }
};

start();
