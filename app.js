const express = require("express");
const request = require("request");

const app = express();

// deprecated
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json()); // for express 4.16 or higher
app.use(express.urlencoded());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
