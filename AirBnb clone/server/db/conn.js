const mongoose=require("mongoose")

mongoose.connect(process.env.MONGOURL)
    .then(()=>{
        console.log("server is connected")
    })
    .catch((err)=>{
        console.log(err)
    })