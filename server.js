const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("public"));
app.use(express.static("files"));
app.use(express.static(path.join(__dirname, "front")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("r");
});

app.get("/group", (req, res) => {
  res.render("index");
});

app.get("/list", (req, res) => {
  res.render("list");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
