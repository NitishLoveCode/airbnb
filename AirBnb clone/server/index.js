const express= require("express")
const app=express()
const dotenv=require("dotenv")
const cors=require("cors")
dotenv.config({path:"./.env"})
require("./db/conn")
const user_Schema= require("./schema/Users")
app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use(express.json())


app.post("/register",async(req,res)=>{
    const {name,email,password}=req.body
    if(name && email && password){
        try{
            const data_save=await new user_Schema({
                name,
                email,
                password
            })
            const result=await data_save.save()
            console.log(result)

        }catch(err){
            if(err.keyPattern){
                res.status(409).json("already register user please login.")
                console.log(err.keyValue.email)
            }
            // console.log(err)
        }
    }else(
        res.status(401).json("invilid credentials")
    )
})


app.listen(process.env.PORT,()=>{
    console.log(`server is started at ${process.env.PORT}`)
})