const express = require("express");
const router = express.Router();
const User = require("../models/user");

const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
    const body =req.body;

    User.findOne({email: body.email}, (error, userDB) => {
        if(error){
            res.status(500).json({ok:false,error });
        }else if(!userDB){
            res.status(400).json({ok:false,
                 error: {message: "Email not found"}
            });
        }else if(!bcrypt.compareSync(body.password, userDB.password)){
            res.status(400).json({
                ok:false,
                error:{ message:"Invalid password"}
            })
        } else { // Cuando todo ha ido bien
            res.status(200).json({
                ok:true,
                user: userDB
            })
        }
    });
});


module.exports = router;