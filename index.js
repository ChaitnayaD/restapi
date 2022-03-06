const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("connection to db successful "))
  .catch((err) => console.log(err));
//initialize routes
app.use("/api", require("./routes/api"));

app.use((err, req, res, next) => {
  //console.log(err);
  res.status(422).send({ error: err.message });
});

app.listen(process.env.port || 3000, () => {
  console.log("listening to requests");
});
