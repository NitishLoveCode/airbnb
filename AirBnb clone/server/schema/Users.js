const mongoose= require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    }
})

const all_user_schema= new mongoose.model("User",userSchema)


module.exports=all_user_schema