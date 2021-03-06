const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
require("dotenv").config();
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is on port ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();
