import bodyParser from "body-parser";
import express from "express";
import cors from "cors"
import BusRouter from "./routes/bus.route.js"
import dbConfig from "./db/dbConfig.js"

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

app.use("/bus",BusRouter)
// app.use("/",(req,res,next)=>{
//     res.json("Hello World")
// })


app.listen(7777,()=>{
    console.log("server started..")
})