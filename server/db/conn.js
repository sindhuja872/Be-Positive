const mongoose=require("mongoose");

const DB="mongodb+srv://<Username>:<Password>@cluster0.twnyx.mongodb.net/<DatabaseName>?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("Connection start")).catch((error)=>console.log(error.message));
