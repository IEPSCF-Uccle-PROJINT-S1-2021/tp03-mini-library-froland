const express = require("express");
const logger = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");

const root = require("./routes/root");
const books = require("./routes/books");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", root);
app.use("/books", books);

app.listen(4242, () => {
  console.log("Server started. Listening on http://127.0.0.1:4242/");
});
