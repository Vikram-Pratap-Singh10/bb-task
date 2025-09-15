import mongoose from "mongoose"

const BusSchema = new mongoose.Schema({
    busNumber:{
        type:String
    },
    busName:{
        type:String
    },
    seatNumber:{
        type:Number
    },
    travDate:{
        type:Date
    },
    status:{
        type:String
    }
})

export const Bus = mongoose.model("Bus",BusSchema);