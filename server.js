const express = require('express');
const path = require('path');
const cheerio = require('cheerio');
const axios = require('axios');
const app = express();
const PORT = 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const hbs = require('express-handlebars');
app.engine("handlebars", hbs({ defaultLayout: "index" }));
app.set("view engine", "handlebars")

const routes = require('./routes');
app.use(routes);


const mongoose = require('mongoose');
const MONGO_URI = "mongodb://localhost/newsscrapes";
mongoose.connect(MONGO_URI);


app.listen(PORT, function () {
    console.log("Listening on PORT: ", PORT)
})