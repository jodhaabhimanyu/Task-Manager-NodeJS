const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log("CONNECTED TO THE DB..."))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
