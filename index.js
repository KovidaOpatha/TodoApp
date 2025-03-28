const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const TodoTask = require("./models/TodoTask")

dotenv.config();

app.use(express.urlencoded({ extended: true}));
app.use("/static", express.static("public"));

mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log("Connected to DB!");
        app.listen(3000, () => console.log("Server Up and running"));
    })
    .catch((err) => {console.error(err); });

app.set("view engine", "ejs");

app.get('/',(req, res) => {
    res.render('todo.ejs');
});

app.post('/',(req, res) => {
    console.log(req.body);
});

//app.listen(3000, () => console.log("Server Up and running"));