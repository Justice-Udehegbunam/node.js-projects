const mongoose = require("mongoose");

const connectDB = (url, dbName) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: dbName,
  });
  // .then(() => console.log("CONNECTED TO THE DB.."))
  // .catch((err) => console.log(err));
};

/*  how to remove deprecation warnings you need to add this " {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }" */

module.exports = connectDB;
