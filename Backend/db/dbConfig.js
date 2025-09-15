import mongoose from "mongoose";

mongoose.connect("mongodb+srv://bugslayers45:bugslayers45@cluster0.m4qsve7.mongodb.net/dbBus?retryWrites=true&w=majority")
.then(result=>{
    console.log("Database Connected Successfully..")
}).catch(err=>{
    console.log(err);
})

export default mongoose.connections;