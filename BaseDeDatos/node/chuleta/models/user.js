const mongoose = require ("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

const validRoles = {
    values:["ADMIN", "USER"],
    message:"{VALUE} is not a valid role"
}

let userSchema = new Schema({
    username:{
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "email is required"]
    },
    password:{
        type: String,
        required: [true, "password is required"]
    },
    role: {
        type: String,
        default: "USER", 
        enum: validRoles
    },
    active: {
        type: Boolean,
        default: true
    }
});

userSchema.methods.toJson = function (){
    const user = this;

    const userObject = {...user};// user.toObjetct()

    delete userObject.password;

    return user;
}

userSchema.plugin(uniqueValidator,{message:"{PATH} should be unique"});

module.exports = mongoose.model("User", userSchema);