const express = require ("express");
const user = require("../models/user");
const User = require("../models/user");
const ramda = require("ramda");
const bcrypt = require ("bcrypt");
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
    const PAGE_SIZE = 2;
    const page = req.query.page || 1;

    User.find({active:true})
    .skip((page-1) * PAGE_SIZE) //Numero de documentos que saltara
    .limit(PAGE_SIZE)// Numero de documentos que devolvera
    .exec((error, users) => {
        if(error){
            res.status(400).json({ok: false, error});
        } else{
            res.status(200).json({ok: true, users});
        }
    });
});

 
router.post("/", (req, res) => {
    let body = req.body;

    const user = new User({
        username: body.username,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
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

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = ramda.pick(["username", "email"], req.body)
    User.findByIdAndUpdate(
        id, 
        body, 
        {new: true, runValidators: true, context:"query"},//options
        (error, updateUser) => {
            if(error){
                res.status(400).json({ok: false, error});
            }else if(!runValidators){
                res.status(400).json({ok: true, message:"This ID is not found"});

            }else {
                res.status(201).json({ok: true, updateUser});
            } 
        }   
    );
});

router.delete("/:id", (req,res) =>{
    const id = req.params.id;

    User.findOneAndDelete(id,(error, removedUser) => {
        if(error){
            res.status(400).json({ok: false, error});
        }else {
            res.status(201).json({ok: true, removedUser});
        }
    });
})

module.exports = router;