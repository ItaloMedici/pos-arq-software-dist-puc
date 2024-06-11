var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var productsRouter = require("./routes/products");
var productsRouterV2 = require("./routes/productsV2");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/v1/", productsRouter);
app.use("/api/v2/", productsRouterV2);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Started on http://localhost:${PORT}`);
});

module.exports = app;
