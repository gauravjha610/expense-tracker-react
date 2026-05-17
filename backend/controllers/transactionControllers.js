import mongoose from "mongoose";
import transactionModel from "../models/transactionModel.js";

export const getTransactions= async(req,res)=>{
    try {
        const transactions= await transactionModel.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export const addTransaction = async(req,res)=>{
    try {
        const {type,description,amount} = req.body;
        
        if( !description || amount === 0){
            return res.status(400).json({
                message: "Invalid transaction details"
            });
        }
        const newTransaction = await transactionModel.create({
            type,
            description,
            amount
        });
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export const deleteTransaction= async(req,res)=>{
    try {
        const id = req.params.id;
        const transaction = await transactionModel.findByIdAndDelete(id);
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}