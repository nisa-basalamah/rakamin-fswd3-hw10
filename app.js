require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler.js");

app.use(express.static("uploads"));
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is running and listening on port ${process.env.PORT}`);
});
