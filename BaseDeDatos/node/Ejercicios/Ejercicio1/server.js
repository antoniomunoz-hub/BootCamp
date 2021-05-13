require("./config/config");
const express = require("express");
const app = express();

app.use(express.json());

let users= [];

app.get("/users",(req, res) => {
    const user = {name:"Jhon", email:"jhonylabiossellados@camorra.com"}
    res.json({ok:true, results: users})
});

app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    res.json({id});
});

app.delete("/users/:id", (req,res) =>{
    const id = req.params.id;

    const removeduser = users.splice(id, 1);

    res.status(200).json(removeduser);
});

app.post("/users",(req, res) => {
    const body = req.body;
    if(!body.name){
        res.status(400).json({ok:false, message: "Name is required"})
    } else {
        users.push(body);
        res.status(201).json({user: body});
    }
});

app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", process.env.PORT);
});