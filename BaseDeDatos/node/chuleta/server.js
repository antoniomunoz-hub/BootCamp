//Importamos nuestro archivo config con las variables de entornio
require("./config/config")
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const users = require("./routes/users");
const login = require("./routes/login");

//Antes de las peticiones, usamos middlewares
app.use(express.json());

app.use("/users", users);
app.use("/login", login);

mongoose.connect("mongodb://localhost:27017/users",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", err => console.log("Connection to DB failed:", err));
db.once("open", () => console.log("Conenection to DB succesfuly"));

app.listen(
    process.env.PORT,
    () => console.log("Listening on port", process.env.PORT));