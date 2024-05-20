// This

require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const Start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // this is used to delete any gibberish datathat u had during test phase
    await Product.deleteMany();
    // this line populates the database with jsonProducts data because its just an array of json data
    await Product.create(jsonProducts);
    console.log("Success");

    //Process.exit
    process.exit(0);
    //The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code. If code is omitted, exit uses either the 'success' code 0 or the value of process.exitCode if it has been set. Node.js will not terminate until all the 'exit' event listeners are called.
  } catch (error) {
    process.exit(1);
  }
};

Start();
