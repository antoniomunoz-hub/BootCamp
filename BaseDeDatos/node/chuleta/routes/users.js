const express = require ("express");
const User = require("../models/user");
const router = express.Router();

router.get("/", (req, res) => {
    //Similar al find de Mongo, si el filtro estavacion
    //me devuelve todos los documentos.
    User.find({}).exec((error, users) => {
        if(error){
            res.status(400).json({ok: false, error});
        }else {
            res.status(201).json({ok: true, users});
        }

    })
});

router.get("/:id", (req, res) => {
    let id = req.params.id;
    res.json({message: `Petición GET recibida correctamente ${id}`});
});

 
router.post("/", (req, res) => {
    let body = req.body;

    const user = new User({
        username: body.username,
        email: body.email,
        password: body.password
    });

    user.save((error, savedUser) => {
        if(error){
            res.status(400).json({ok: false, error});
        }else {
            res.status(201).json({ok: true, savedUser});
        }
    });
    // if(body.username){
    //     res.status(200).json({message: `Recibido Username:${body.username}`});
    // }else{
    //     res.status(400).json({ok:false, message: "El Username es Obligatorio"});
    // }
});

module.exports = router;