const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

//Connect to DB
db.connect();

// HTTP Logger
app.use(morgan("combined"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

//Routes init
route(app);

app.listen(port, () => console.log(`Start Server: http://localhost:${port}`));
