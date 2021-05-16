const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res)=> {
    res.json({message: "Peticion get recibida correctamente"});
});

app.post("/", (req, res) => {
    let body =req.body;
    if (body.toDo){
        res.status(200).json({message:`Tarea recibida correctamente ${body.toDo}`});
    } else {
        res.status(400).json({ok:false, message:"La Tarea es obligatoria"});
    }

});

app.get("/toDos", (req, res)=> {
    res.json({message: "Peticion get recibida correctamente"});
});

app.get("/:id", (req, res)=> {
    let id = req.params.id;
    res.json({message: `Peticion get con parametro recibida correctamente ${id}`});
});


app.listen(3000); 