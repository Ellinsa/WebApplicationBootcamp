const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
