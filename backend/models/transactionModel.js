import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"userModel",
        required:true
    },
    type:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    amount:{
        type : Number,
        required : true
    },
    
},{timestamps:true});

const transactionModel = mongoose.model("transactions",transactionSchema);

export default transactionModel;