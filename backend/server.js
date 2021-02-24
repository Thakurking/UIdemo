const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const index = require("../backend/routes/index");

mongoose.connect("mongodb://localhost/uidemo", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", index);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
