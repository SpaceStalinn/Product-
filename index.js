console.log("Hi")

const express = require("express");

const app = express();

const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.listen(port, () => {
    console.log(`Running on ${port}`);
});

app.get("/", (req, res) => {
    res.render("client/pages/home/index");
});

app.get("/products", (req, res) => {
    res.render("client/pages/products/index");
});

